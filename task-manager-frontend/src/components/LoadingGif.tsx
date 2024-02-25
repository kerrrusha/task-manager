interface LoadingGifProps {
    width?: number;
}

export default function LoadingGif({width = 50} : LoadingGifProps) {
    return <img alt="loading.gif"
         src="https://github.com/kerrrusha/wot-stat-tracker/blob/master/wot-stat-tracker-web/src/main/resources/static/gif/loading.gif?raw=true"
         style={{width: width}} />;
}