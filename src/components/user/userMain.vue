<template>
    <div class="userMain-container">
        <!-- nav bar -->
        <div class="userMain-nav">
            <!-- left : didicast image -->
            <div class="userMain-nav-left">
                <img class="userMain-didicast-image" :src="require('@/img/didicast_logo.png')" />
            </div>
            <!-- right : user info -->
            <div class="userMain-nav-right">
                <!-- user name -->
                <!-- <span>Miseon</span> -->
                <!-- user image -->
                <img class="userMain-profile-image" :src="require('@/img/profile.png')" />
            </div>
        </div>

        <div class="userMain-class-container">
            <!-- Santa image -->
            <div class="userMain-santa-div">
                <img class="userMain-santa-image" :src="require('@/img/santa_logo.png')" />
            </div>

            <!-- 등록 강의 -->
            <h3>등록 강의</h3>

            <Carousel :breakpoints="breakpoints" :settings="settings"
            :wrap-around="true"
            class="userMain-register-carousel">
                <!-- 캐러셀 -->
                <Slide v-for="i in 10" :key="i"
                class="userMain-register-carousel-item">
                    <div style="width: 200px; height: 120px; background-color: #d9d9d9;">
                    </div>
                    <div>
                        <!-- 강의 번호 -->

                        <!-- 강의 제목 및 수강 버튼 -->
                        <div style="width: 200px; margin-left: 50px;">영상 {{ i }}</div>
                    </div>
                    <!-- 강의 태그 -->

                </Slide>

                <template #addons>
                    <Navigation />
                    <!-- <Pagination /> -->
                </template>
            </Carousel>

            <!-- 맞춤 추천 강의 -->


            <!-- 수강 기간 매핑 강의 -->


        </div>


        <!-- Footer -->
        <div class="userMain-footer">
            <h1>(주) 산타</h1>
            <div>
                대표 : 박기웅 | 사업자 등록번호 : 627-88-00384
            </div>
            <div>
                서울 특별시 강남구 강남대로 132길 21 3층
            </div>
            <div>
                [HQ] 부산광역시 해운대구 센텀중앙로 97, 센텀스카이비즈 A-704
            </div>
        </div>
</div>
</template>
  
<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide,  Navigation } from 'vue3-carousel';

export default {
    name: 'userMain',
    props: {
    },
    components: { 
        Carousel,
    Slide,
    Navigation,
    },
    data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 4.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 6,
        snapAlign: 'start',
      },
    },
  }),
}
</script>
  
<style>
@import "@/css/userMain.css";
</style>
  