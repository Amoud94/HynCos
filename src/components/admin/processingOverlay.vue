<template>
    <div class="loading-overlay" :class="[{'is-active' : isActive}]" v-if="isActive">
        <div id="processing" class="uncomplete center">
            <div class="wrapper">
                <div class="gears">
                    <div class="gear-wrapper gear-wrapper-1">
                        <svg version="1.1" class="gear gear-1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                            style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <path class="st0" d="M507.6,232.1c0,0-9.3-3.5-36.2-6c-32.9-3-42.8-15.4-53.7-30.7h-0.2c-1.4-3.6-2.8-7.2-4.4-10.8l0.1-0.1
		c-3.1-18.6-4.8-34.3,16.3-59.7C446.7,104,450.8,95,450.8,95c-4-10.3-13.8-20-13.8-20s-9.7-9.7-20-13.8c0,0-9.1,4.1-29.8,21.4
		c-25.4,21.1-41.1,19.4-59.7,16.3l-0.1,0.1c-3.5-1.6-7.1-3.1-10.8-4.4v-0.2c-15.3-10.9-27.7-20.9-30.7-53.7c-2.5-26.9-6-36.2-6-36.2
		C269.8,0,256,0,256,0s-13.8,0-23.9,4.4c0,0-3.5,9.3-6,36.2c-3,32.9-15.4,42.8-30.7,53.7v0.2c-3.6,1.4-7.3,2.8-10.8,4.4l-0.1-0.1
		c-18.6,3.1-34.3,4.8-59.7-16.3C104,65.3,95,61.2,95,61.2C84.7,65.3,75,75,75,75s-9.7,9.7-13.8,20c0,0,4.1,9.1,21.4,29.8
		c21.1,25.4,19.4,41.1,16.3,59.7l0.1,0.1c-1.6,3.5-3.1,7.1-4.4,10.8h-0.2c-10.9,15.4-20.9,27.7-53.7,30.7c-26.9,2.5-36.2,6-36.2,6
		C0,242.3,0,256,0,256s0,13.8,4.4,23.9c0,0,9.3,3.5,36.2,6c32.9,3,42.8,15.4,53.7,30.7h0.2c1.4,3.7,2.8,7.3,4.4,10.8l-0.1,0.1
		c3.1,18.6,4.8,34.3-16.3,59.7C65.3,408,61.2,417,61.2,417c4.1,10.3,13.8,20,13.8,20s9.7,9.7,20,13.8c0,0,9-4.1,29.8-21.4
		c25.4-21.1,41.1-19.4,59.7-16.3l0.1-0.1c3.5,1.6,7.1,3.1,10.8,4.4v0.2c15.3,10.9,27.7,20.9,30.7,53.7c2.5,26.9,6,36.2,6,36.2
		C242.3,512,256,512,256,512s13.8,0,23.9-4.4c0,0,3.5-9.3,6-36.2c3-32.9,15.4-42.8,30.7-53.7v-0.2c3.7-1.4,7.3-2.8,10.8-4.4l0.1,0.1
		c18.6-3.1,34.3-4.8,59.7,16.3c20.8,17.3,29.8,21.4,29.8,21.4c10.3-4.1,20-13.8,20-13.8s9.7-9.7,13.8-20c0,0-4.1-9.1-21.4-29.8
		c-21.1-25.4-19.4-41.1-16.3-59.7l-0.1-0.1c1.6-3.5,3.1-7.1,4.4-10.8h0.2c10.9-15.3,20.9-27.7,53.7-30.7c26.9-2.5,36.2-6,36.2-6
		C512,269.8,512,256,512,256S512,242.2,507.6,232.1z M256,375.7c-66.1,0-119.7-53.6-119.7-119.7S189.9,136.3,256,136.3
		c66.1,0,119.7,53.6,119.7,119.7S322.1,375.7,256,375.7z" />
                        </svg>
                    </div>
                    <div class="gear-wrapper gear-wrapper-2">
                        <svg version="1.1" class="gear gear-2" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                            style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <path class="st0" d="M507.6,232.1c0,0-9.3-3.5-36.2-6c-32.9-3-42.8-15.4-53.7-30.7h-0.2c-1.4-3.6-2.8-7.2-4.4-10.8l0.1-0.1
		c-3.1-18.6-4.8-34.3,16.3-59.7C446.7,104,450.8,95,450.8,95c-4-10.3-13.8-20-13.8-20s-9.7-9.7-20-13.8c0,0-9.1,4.1-29.8,21.4
		c-25.4,21.1-41.1,19.4-59.7,16.3l-0.1,0.1c-3.5-1.6-7.1-3.1-10.8-4.4v-0.2c-15.3-10.9-27.7-20.9-30.7-53.7c-2.5-26.9-6-36.2-6-36.2
		C269.8,0,256,0,256,0s-13.8,0-23.9,4.4c0,0-3.5,9.3-6,36.2c-3,32.9-15.4,42.8-30.7,53.7v0.2c-3.6,1.4-7.3,2.8-10.8,4.4l-0.1-0.1
		c-18.6,3.1-34.3,4.8-59.7-16.3C104,65.3,95,61.2,95,61.2C84.7,65.3,75,75,75,75s-9.7,9.7-13.8,20c0,0,4.1,9.1,21.4,29.8
		c21.1,25.4,19.4,41.1,16.3,59.7l0.1,0.1c-1.6,3.5-3.1,7.1-4.4,10.8h-0.2c-10.9,15.4-20.9,27.7-53.7,30.7c-26.9,2.5-36.2,6-36.2,6
		C0,242.3,0,256,0,256s0,13.8,4.4,23.9c0,0,9.3,3.5,36.2,6c32.9,3,42.8,15.4,53.7,30.7h0.2c1.4,3.7,2.8,7.3,4.4,10.8l-0.1,0.1
		c3.1,18.6,4.8,34.3-16.3,59.7C65.3,408,61.2,417,61.2,417c4.1,10.3,13.8,20,13.8,20s9.7,9.7,20,13.8c0,0,9-4.1,29.8-21.4
		c25.4-21.1,41.1-19.4,59.7-16.3l0.1-0.1c3.5,1.6,7.1,3.1,10.8,4.4v0.2c15.3,10.9,27.7,20.9,30.7,53.7c2.5,26.9,6,36.2,6,36.2
		C242.3,512,256,512,256,512s13.8,0,23.9-4.4c0,0,3.5-9.3,6-36.2c3-32.9,15.4-42.8,30.7-53.7v-0.2c3.7-1.4,7.3-2.8,10.8-4.4l0.1,0.1
		c18.6-3.1,34.3-4.8,59.7,16.3c20.8,17.3,29.8,21.4,29.8,21.4c10.3-4.1,20-13.8,20-13.8s9.7-9.7,13.8-20c0,0-4.1-9.1-21.4-29.8
		c-21.1-25.4-19.4-41.1-16.3-59.7l-0.1-0.1c1.6-3.5,3.1-7.1,4.4-10.8h0.2c10.9-15.3,20.9-27.7,53.7-30.7c26.9-2.5,36.2-6,36.2-6
		C512,269.8,512,256,512,256S512,242.2,507.6,232.1z M256,375.7c-66.1,0-119.7-53.6-119.7-119.7S189.9,136.3,256,136.3
		c66.1,0,119.7,53.6,119.7,119.7S322.1,375.7,256,375.7z" />
                        </svg>
                    </div>
                    <div class="gear-wrapper gear-wrapper-3">
                        <svg version="1.1" class="gear gear-3" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                            style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <path class="st0" d="M507.6,232.1c0,0-9.3-3.5-36.2-6c-32.9-3-42.8-15.4-53.7-30.7h-0.2c-1.4-3.6-2.8-7.2-4.4-10.8l0.1-0.1
		c-3.1-18.6-4.8-34.3,16.3-59.7C446.7,104,450.8,95,450.8,95c-4-10.3-13.8-20-13.8-20s-9.7-9.7-20-13.8c0,0-9.1,4.1-29.8,21.4
		c-25.4,21.1-41.1,19.4-59.7,16.3l-0.1,0.1c-3.5-1.6-7.1-3.1-10.8-4.4v-0.2c-15.3-10.9-27.7-20.9-30.7-53.7c-2.5-26.9-6-36.2-6-36.2
		C269.8,0,256,0,256,0s-13.8,0-23.9,4.4c0,0-3.5,9.3-6,36.2c-3,32.9-15.4,42.8-30.7,53.7v0.2c-3.6,1.4-7.3,2.8-10.8,4.4l-0.1-0.1
		c-18.6,3.1-34.3,4.8-59.7-16.3C104,65.3,95,61.2,95,61.2C84.7,65.3,75,75,75,75s-9.7,9.7-13.8,20c0,0,4.1,9.1,21.4,29.8
		c21.1,25.4,19.4,41.1,16.3,59.7l0.1,0.1c-1.6,3.5-3.1,7.1-4.4,10.8h-0.2c-10.9,15.4-20.9,27.7-53.7,30.7c-26.9,2.5-36.2,6-36.2,6
		C0,242.3,0,256,0,256s0,13.8,4.4,23.9c0,0,9.3,3.5,36.2,6c32.9,3,42.8,15.4,53.7,30.7h0.2c1.4,3.7,2.8,7.3,4.4,10.8l-0.1,0.1
		c3.1,18.6,4.8,34.3-16.3,59.7C65.3,408,61.2,417,61.2,417c4.1,10.3,13.8,20,13.8,20s9.7,9.7,20,13.8c0,0,9-4.1,29.8-21.4
		c25.4-21.1,41.1-19.4,59.7-16.3l0.1-0.1c3.5,1.6,7.1,3.1,10.8,4.4v0.2c15.3,10.9,27.7,20.9,30.7,53.7c2.5,26.9,6,36.2,6,36.2
		C242.3,512,256,512,256,512s13.8,0,23.9-4.4c0,0,3.5-9.3,6-36.2c3-32.9,15.4-42.8,30.7-53.7v-0.2c3.7-1.4,7.3-2.8,10.8-4.4l0.1,0.1
		c18.6-3.1,34.3-4.8,59.7,16.3c20.8,17.3,29.8,21.4,29.8,21.4c10.3-4.1,20-13.8,20-13.8s9.7-9.7,13.8-20c0,0-4.1-9.1-21.4-29.8
		c-21.1-25.4-19.4-41.1-16.3-59.7l-0.1-0.1c1.6-3.5,3.1-7.1,4.4-10.8h0.2c10.9-15.3,20.9-27.7,53.7-30.7c26.9-2.5,36.2-6,36.2-6
		C512,269.8,512,256,512,256S512,242.2,507.6,232.1z M256,375.7c-66.1,0-119.7-53.6-119.7-119.7S189.9,136.3,256,136.3
		c66.1,0,119.7,53.6,119.7,119.7S322.1,375.7,256,375.7z" />
                        </svg>
                    </div>
                    <div class="gear-wrapper gear-wrapper-4">
                        <svg version="1.1" class="gear gear-4" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                            style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <path class="st0" d="M507.6,232.1c0,0-9.3-3.5-36.2-6c-32.9-3-42.8-15.4-53.7-30.7h-0.2c-1.4-3.6-2.8-7.2-4.4-10.8l0.1-0.1
		c-3.1-18.6-4.8-34.3,16.3-59.7C446.7,104,450.8,95,450.8,95c-4-10.3-13.8-20-13.8-20s-9.7-9.7-20-13.8c0,0-9.1,4.1-29.8,21.4
		c-25.4,21.1-41.1,19.4-59.7,16.3l-0.1,0.1c-3.5-1.6-7.1-3.1-10.8-4.4v-0.2c-15.3-10.9-27.7-20.9-30.7-53.7c-2.5-26.9-6-36.2-6-36.2
		C269.8,0,256,0,256,0s-13.8,0-23.9,4.4c0,0-3.5,9.3-6,36.2c-3,32.9-15.4,42.8-30.7,53.7v0.2c-3.6,1.4-7.3,2.8-10.8,4.4l-0.1-0.1
		c-18.6,3.1-34.3,4.8-59.7-16.3C104,65.3,95,61.2,95,61.2C84.7,65.3,75,75,75,75s-9.7,9.7-13.8,20c0,0,4.1,9.1,21.4,29.8
		c21.1,25.4,19.4,41.1,16.3,59.7l0.1,0.1c-1.6,3.5-3.1,7.1-4.4,10.8h-0.2c-10.9,15.4-20.9,27.7-53.7,30.7c-26.9,2.5-36.2,6-36.2,6
		C0,242.3,0,256,0,256s0,13.8,4.4,23.9c0,0,9.3,3.5,36.2,6c32.9,3,42.8,15.4,53.7,30.7h0.2c1.4,3.7,2.8,7.3,4.4,10.8l-0.1,0.1
		c3.1,18.6,4.8,34.3-16.3,59.7C65.3,408,61.2,417,61.2,417c4.1,10.3,13.8,20,13.8,20s9.7,9.7,20,13.8c0,0,9-4.1,29.8-21.4
		c25.4-21.1,41.1-19.4,59.7-16.3l0.1-0.1c3.5,1.6,7.1,3.1,10.8,4.4v0.2c15.3,10.9,27.7,20.9,30.7,53.7c2.5,26.9,6,36.2,6,36.2
		C242.3,512,256,512,256,512s13.8,0,23.9-4.4c0,0,3.5-9.3,6-36.2c3-32.9,15.4-42.8,30.7-53.7v-0.2c3.7-1.4,7.3-2.8,10.8-4.4l0.1,0.1
		c18.6-3.1,34.3-4.8,59.7,16.3c20.8,17.3,29.8,21.4,29.8,21.4c10.3-4.1,20-13.8,20-13.8s9.7-9.7,13.8-20c0,0-4.1-9.1-21.4-29.8
		c-21.1-25.4-19.4-41.1-16.3-59.7l-0.1-0.1c1.6-3.5,3.1-7.1,4.4-10.8h0.2c10.9-15.3,20.9-27.7,53.7-30.7c26.9-2.5,36.2-6,36.2-6
		C512,269.8,512,256,512,256S512,242.2,507.6,232.1z M256,375.7c-66.1,0-119.7-53.6-119.7-119.7S189.9,136.3,256,136.3
		c66.1,0,119.7,53.6,119.7,119.7S322.1,375.7,256,375.7z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="headings">
                <div class="w-full text-center text-xl font-bold text-[#111827]" v-if="title"> {{ title }}</div>
                <div class="w-full text-center text-base font-medium text-[#6B7280]" v-if="description"> {{ description }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'process-overlay',
    props:['title', 'description', 'isActive'],
}
</script>
<style>
.processing-overlay {
    display: none;
    background: rgba(255, 255, 255, 0.7);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9998;
    align-items: center;
    justify-content: center;
}

.processing-overlay.is-active {
    display: flex;
}
@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    font-stretch: normal;
    src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsiH0B4gaVc.ttf) format('truetype');
}

@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-stretch: normal;
    src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVc.ttf) format('truetype');
}

@font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-stretch: normal;
    src: url(https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1x4gaVc.ttf) format('truetype');
}

* {
    box-sizing: border-box;
}

body {
    font-family: "Open Sans", sans-serif;
}

.center {
    margin: 0 auto;
    text-align: center;
}

#processing {
    position: relative;
    margin: auto;
    width: auto;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
}

#processing.uncomplete .gear-wrapper-1 {
    -webkit-animation: gearEnter1 0.5s ease 1s forwards;
    animation: gearEnter1 0.5s ease 1s forwards;
}

#processing.uncomplete .gear-wrapper-2 {
    -webkit-animation: gearEnter2 0.5s ease 1.5s forwards;
    animation: gearEnter2 0.5s ease 1.5s forwards;
}

#processing.uncomplete .gear-wrapper-3 {
    -webkit-animation: gearEnter3 0.5s ease 1.25s forwards;
    animation: gearEnter3 0.5s ease 1.25s forwards;
}

#processing.uncomplete .gear-wrapper-4 {
    -webkit-animation: gearEnter4 0.5s ease 0.75s forwards;
    animation: gearEnter4 0.5s ease 0.75s forwards;
}

#processing.complete .gears {
    background-color: transparent;
    transition: background-color 0.25s ease 0.75s;
}

#processing.complete .gear-wrapper-1 {
    transform: rotate(10deg) translate3d(-5px, -5px, 0);
    -webkit-animation: gearLeave1 0.5s ease 0.5s forwards;
    animation: gearLeave1 0.5s ease 0.5s forwards;
}

#processing.complete .gear-wrapper-2 {
    transform: rotate(25deg) translate3d(20px, -50px, 0);
    -webkit-animation: gearLeave2 0.5s ease 0.5s forwards;
    animation: gearLeave2 0.5s ease 0.5s forwards;
}

#processing.complete .gear-wrapper-3 {
    transform: rotate(15deg) translate3d(-25px, -15px, 0);
    -webkit-animation: gearLeave3 0.5s ease 0.5s forwards;
    animation: gearLeave3 0.5s ease 0.5s forwards;
}

#processing.complete .gear-wrapper-4 {
    transform: translate3d(0, 0, 0);
    -webkit-animation: gearLeave4 0.5s ease 0.5s forwards;
    animation: gearLeave4 0.5s ease 0.5s forwards;
}

#processing.complete .loading-bar {
    -webkit-animation: hideLoading 0.5s forwards;
    animation: hideLoading 0.5s forwards;
}

#processing.complete .checkmark.checkmark-success {
    -webkit-animation: fillCheckSuccess 0.4s cubic-bezier(0.65, 0, 0.45, 1) 1s forwards, beatCheck 0.2s ease-out 1.5s forwards, echoSuccess 1.25s ease-out 1.5s forwards;
    animation: fillCheckSuccess 0.4s cubic-bezier(0.65, 0, 0.45, 1) 1s forwards, beatCheck 0.2s ease-out 1.5s forwards, echoSuccess 1.25s ease-out 1.5s forwards;
}

#processing.complete .checkmark.checkmark-success .checkmark-circle {
    stroke: #3c763d;
}

#processing.complete .checkmark.checkmark-error {
    -webkit-animation: fillCheckError 0.4s cubic-bezier(0.65, 0, 0.45, 1) 1s forwards, beatCheck 0.2s ease-out 1.5s forwards, echoError 1.25s ease-out 1.5s forwards;
    animation: fillCheckError 0.4s cubic-bezier(0.65, 0, 0.45, 1) 1s forwards, beatCheck 0.2s ease-out 1.5s forwards, echoError 1.25s ease-out 1.5s forwards;
}

#processing.complete .checkmark.checkmark-error .checkmark-circle {
    stroke: #a94442;
}

#processing.complete .checkmark-circle {
    -webkit-animation: strokeCheck 0.5s cubic-bezier(0.65, 0, 0.45, 1) 0.75s forwards;
    animation: strokeCheck 0.5s cubic-bezier(0.65, 0, 0.45, 1) 0.75s forwards;
}

#processing.complete .checkmark-check {
    -webkit-animation: strokeCheck 0.3s cubic-bezier(0.65, 0, 0.45, 1) 1.25s forwards;
    animation: strokeCheck 0.3s cubic-bezier(0.65, 0, 0.45, 1) 1.25s forwards;
}

h1 {
    color: #333;
    font-weight: 400;
}

h2 {
    color: #999;
    font-weight: 300;
}

.wrapper {
    position: relative;
    margin: 20px auto;
}

.gears {
    width: 300px;
    height: 300px;
    background-color: #999;
    border-radius: 50%;
    overflow: hidden;
    transform: scale(0);
    -webkit-animation: scale 0.5s ease 0.5s forwards;
    animation: scale 0.5s ease 0.5s forwards;
}

@-webkit-keyframes scale {
    to {
        transform: scale(1);
    }
}

@keyframes scale {
    to {
        transform: scale(1);
    }
}

.gear-wrapper {
    position: absolute;
}

.gear-wrapper.gear-wrapper-1 {
    top: 0;
    left: 0;
    transform: rotate(10deg) translate3d(-40px, -60px, 0);
}

.gear-wrapper.gear-wrapper-2 {
    top: 0;
    right: 0;
    transform: rotate(25deg) translate3d(70px, -130px, 0);
}

.gear-wrapper.gear-wrapper-3 {
    bottom: 0;
    right: 0;
    transform: rotate(15deg) translate3d(30px, 20px, 0);
}

.gear-wrapper.gear-wrapper-4 {
    bottom: 0;
    left: 0;
    transform: translate3d(-70px, 70px, 0);
}

@-webkit-keyframes gearEnter1 {
    to {
        transform: rotate(10deg) translate3d(-5px, -5px, 0);
    }
}

@keyframes gearEnter1 {
    to {
        transform: rotate(10deg) translate3d(-5px, -5px, 0);
    }
}

@-webkit-keyframes gearEnter2 {
    to {
        transform: rotate(25deg) translate3d(20px, -50px, 0);
    }
}

@keyframes gearEnter2 {
    to {
        transform: rotate(25deg) translate3d(20px, -50px, 0);
    }
}

@-webkit-keyframes gearEnter3 {
    to {
        transform: rotate(15deg) translate3d(-25px, -15px, 0);
    }
}

@keyframes gearEnter3 {
    to {
        transform: rotate(15deg) translate3d(-25px, -15px, 0);
    }
}

@-webkit-keyframes gearEnter4 {
    to {
        transform: translate3d(0, 0, 0);
    }
}

@keyframes gearEnter4 {
    to {
        transform: translate3d(0, 0, 0);
    }
}

@-webkit-keyframes gearLeave1 {
    from {
        transform: rotate(10deg) translate3d(-5px, -5px, 0);
    }

    to {
        transform: rotate(10deg) translate3d(-40px, -60px, 0);
    }
}

@keyframes gearLeave1 {
    from {
        transform: rotate(10deg) translate3d(-5px, -5px, 0);
    }

    to {
        transform: rotate(10deg) translate3d(-40px, -60px, 0);
    }
}

@-webkit-keyframes gearLeave2 {
    from {
        transform: rotate(25deg) translate3d(20px, -50px, 0);
    }

    to {
        transform: rotate(25deg) translate3d(70px, -130px, 0);
    }
}

@keyframes gearLeave2 {
    from {
        transform: rotate(25deg) translate3d(20px, -50px, 0);
    }

    to {
        transform: rotate(25deg) translate3d(70px, -130px, 0);
    }
}

@-webkit-keyframes gearLeave3 {
    from {
        transform: rotate(15deg) translate3d(-25px, -15px, 0);
    }

    to {
        transform: rotate(15deg) translate3d(30px, 20px, 0);
    }
}

@keyframes gearLeave3 {
    from {
        transform: rotate(15deg) translate3d(-25px, -15px, 0);
    }

    to {
        transform: rotate(15deg) translate3d(30px, 20px, 0);
    }
}

@-webkit-keyframes gearLeave4 {
    from {
        transform: translate3d(0, 0, 0);
    }

    to {
        transform: translate3d(-70px, 70px, 0);
    }
}

@keyframes gearLeave4 {
    from {
        transform: translate3d(0, 0, 0);
    }

    to {
        transform: translate3d(-70px, 70px, 0);
    }
}

.gear {
    fill: #e4e4e4;
    transform-origin: 50% 50%;
}

.gear.gear-1 {
    width: 140px;
    height: 160px;
    animation: gearRotate 1s linear 2s infinite reverse;
}

.gear.gear-2 {
    width: 200px;
    height: 200px;
    -webkit-animation: gearRotate 1.5s linear 2s infinite;
    animation: gearRotate 1.5s linear 2s infinite;
}

.gear.gear-3 {
    width: 120px;
    height: 120px;
    animation: gearRotate 0.75s linear 2s infinite reverse;
}

.gear.gear-4 {
    width: 160px;
    height: 160px;
    -webkit-animation: gearRotate 1.25s linear 2s infinite;
    animation: gearRotate 1.25s linear 2s infinite;
}

@-webkit-keyframes gearRotate {
    to {
        transform: rotate(360deg);
    }
}

@keyframes gearRotate {
    to {
        transform: rotate(360deg);
    }
}

.loading-bar {
    position: relative;
    width: 200px;
    height: 10px;
    margin-top: 50px;
    background-color: #e4e4e4;
    border-radius: 10px;
    overflow: hidden;
}

.loading-bar span {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: #999;
    transition: width 0.5s ease;
}
</style>