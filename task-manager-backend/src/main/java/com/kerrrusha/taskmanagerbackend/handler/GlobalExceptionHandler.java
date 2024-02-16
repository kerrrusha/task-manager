package com.kerrrusha.taskmanagerbackend.handler;

import com.kerrrusha.taskmanagerbackend.dto.ErrorResponse;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ResponseBody
    @ResponseStatus(HttpStatus.FORBIDDEN)
    @ExceptionHandler(value = ExpiredJwtException.class)
    public ErrorResponse handleAccessDeniedException(Throwable ex, WebRequest request) {
        return new ErrorResponse("Access denied: " + ex.getMessage());
    }
}
