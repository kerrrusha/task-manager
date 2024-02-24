package com.kerrrusha.taskmanagerbackend.security;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.kerrrusha.taskmanagerbackend.domain.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;

@Slf4j
@Service
public class JwtService {

    private static final String ROLES_KEY = "roles";

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration.ms}")
    private long expiration;

    @Value("${jwt.expiration.remember-me.ms}")
    private long rememberMeExpiration;

    public String generateToken(UserDetails userDetails) {
        return generateToken(userDetails, false);
    }

    public String generateToken(UserDetails userDetails, boolean rememberMe) {
        long now = System.currentTimeMillis();
        Date willExpireAt = rememberMe ? new Date(now + rememberMeExpiration) : new Date(now + expiration);

        Map<String, Object> extraClaims = new HashMap<>();
        if (userDetails instanceof User customUserDetails) {
            extraClaims.put("id", customUserDetails.getId());
            extraClaims.put("email", customUserDetails.getEmail());
            extraClaims.put(ROLES_KEY, customUserDetails.getRoles());
        }
        return Jwts.builder()
                .claims(extraClaims)
                .subject(userDetails.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(willExpireAt)
                .signWith(getSigningKey(), Jwts.SIG.HS256)
                .compact();
    }

    public UsernamePasswordAuthenticationToken verifyAndGetAuthentication(String token) {
        try {
            Claims claims = Jwts.parser()
                    .verifyWith(getSigningKey())
                    .build()
                    .parseSignedClaims(token)
                    .getPayload();
            List<GrantedAuthority> authorities = AuthorityUtils.commaSeparatedStringToAuthorityList(claims.get(ROLES_KEY, String.class));
            return new UsernamePasswordAuthenticationToken(claims.getSubject(), token, authorities);
        } catch (JwtException | IllegalArgumentException e) {
            log.warn("#verifyAndGetAuthentication - ", e);
            return null;
        }
    }

    private SecretKey getSigningKey() {
        byte[] keyBytes = Decoders.BASE64.decode(jwtSecret);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
