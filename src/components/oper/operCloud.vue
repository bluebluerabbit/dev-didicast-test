<template>
    <div class="operMain-container">
        <!-- nav bar -->
        <div class="operMain-nav">
            <!-- 0. studio by didicast image -->
            <div class="operMain-nav-left">
                <img class="operMain-didicast-image" :src="require('@/img/studio_by_didicast.png')" />
            </div>
            <!-- 1. 강의 관리 -->
            <div class="operMain-nav-second">
                강의 관리
            </div>
            <!-- 2. 멤버 관리 -->
            <div class="operMain-nav-third">
                멤버 관리
            </div>
            <!-- 3. user info -->
            <div class="operMain-nav-right">
                <!-- user name -->
                <!-- <span>Miseon</span> -->
                <!-- user image -->
                <img class="operMain-profile-image" :src="require('@/img/profile.png')" />
            </div>
        </div>

        <!-- nav 밑 tap -->
        <hr />
        <div class="operMain-tap-container">
            <span class="operMain-tap-item">
                강의
            </span>
            <span class="operMain-tap-item" style="color: #4DAED3;">
                영상 클라우드
            </span>
        </div>
        <hr /><br />

        <!-- 영상 업로드 -->
        <div class="operCloud-button-container">
            <button class="operCloud-button">
                + 영상 업로드
            </button>

            <button class="operCloud-button">
                아카이브 영상 편집
            </button>
        </div>

        <!-- 아카이브 테이블 -->
        <div class="container operCloud-main">
            <table class="table table-bordered operCloud-table">
                <th class="operCloud-table-header">
                    영상 제목
                </th>
                <th class="operCloud-table-header">
                    영상 용량
                </th>
                <th class="operCloud-table-header">
                    재생
                </th>
                <tr v-for="i in 10" :key="i"
                class="operCloud-table-row  align-middle">
                    <td>
                        <div class="radio red">
                            <input type="radio" name="group1" :id="'radio' + i" />
                            <label :for="'radio' + i">아카이브 {{ i }}</label>
                        </div>
                    </td>

                </tr>
            </table>
        </div>

        <!-- Footer -->
        <div class="operMain-footer">
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
export default {
    name: 'operCloud',
    props: {
    },
    components: {
    },
}
</script>
  
<style>
@import "@/css/operMain.css";
@import "@/css/operCloud.css";
</style>
  