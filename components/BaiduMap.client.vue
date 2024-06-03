<script setup>
const props = defineProps({
  address: {
    type: String,
    default: '北京市天安门广场',
  },
});

const getAddressLabel = () => {
  const offsetSize = new BMapGL.Size(-130, -100);
  const labelStyle = {
    color: '#333333',
    backgroundColor: '#fff',
    border: '0',
    fontSize: 14 + 'px',
    height: 60 + 'px',
    width: 266 + 'px',
    paddingLeft: 10 + 'px',
    paddingRight: 10 + 'px',
    paddingTop: 10 + 'px',
    paddingBottom: 10 + 'px',
    boxSizing: 'border-box',
    borderRadius: 5 + 'px',
    fontWeight: 400,
    whiteSpace: 'normal',
  };
  const label = new BMapGL.Label(props.address, {
    offset: offsetSize,
  });
  label.setStyle(labelStyle);
  return label;
};
const initBiduMap = () => {
  //创建Map实例
  const map = new window.BMapGL.Map('map');
  //创建地址解析器实例
  const myGeo = new BMapGL.Geocoder();
  // 将地址解析结果显示在地图上，并调整地图视野
  myGeo.getPoint(
    props.address,
    (point) => {
      if (point) {
        map.centerAndZoom(point, 18);
        //添加鼠标滚动缩放
        map.enableScrollWheelZoom();

        const marker = new BMapGL.Marker(point, {
          title: props.address,
        });
        marker.setLabel(getAddressLabel(props.address));
        map.addOverlay(marker);
        map.addEventListener('zoomend', () => {
          map.panTo(point);
        });
      } else {
        console.log('根据地址解析失败');
      }
    },
    '北京市'
  );
};
onMounted(async () => {
  await nextTick();
  initBiduMap();
});
</script>

<template>
  <div id="map" class="h-[500px]"></div>
</template>
