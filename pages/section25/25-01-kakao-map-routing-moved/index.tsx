import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};
export default function KakaoMapPage(): JSX.Element {
  useEffect((): void => {
    const mapSrc = document.createElement("script");
    mapSrc.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`;
    document.head.appendChild(mapSrc);

    const onLoadKakaoMap = (): void => {
      window.kakao.maps.load((): void => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        console.log("카카오 지도 API가 로드되었습니다.", map);
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(37.5665, 126.978),
        });
        marker.setMap(map);
      });
    };
    mapSrc.addEventListener("load", onLoadKakaoMap);
  }, []);
  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
