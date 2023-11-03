const { kakao } = window;

export default function KakaoMapScript() {
  const container = document.getElementById("myMap");
  const options = {
    center: new kakao.maps.LatLng(37.566826, 126.9786567),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);
  new kakao.maps.Marker({
    //마커가 표시 될 지도
    map: map,
    //마커가 표시 될 위치
    position: new kakao.maps.LatLng(37.369, 126.535),
  });
  
}
