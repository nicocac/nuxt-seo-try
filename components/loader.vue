<template>
  <div class="skeleton-container">
    <div class="skeleton-row row-1">
      <div class="skeleton-animation"></div>
    </div>
    <div class="skeleton-row row-2">
      <div class="skeleton-animation"></div>
    </div>
    <div class="skeleton-filter-container">
      <div class="skeleton-row filter"></div>
      <div class="skeleton-row filter"></div>
      <div class="skeleton-row button"></div>
    </div>
    <div class="skeleton-checkbox">
      <div class="skeleton-row box"></div>
      <div class="skeleton-row box-label"></div>
    </div>
    <div class="skeleton-checkbox">
      <div class="skeleton-row box-label toggle"></div>
      <div class="skeleton-row toggle-button"></div>
    </div>
  </div>
</template>
<style lang="scss">

.skeleton-container {
  display: flex;
  flex-direction: column;
  max-width: 70%;
  margin: auto;
  .skeleton-row {
    width: 100%;
    height: 20px;
    background-color: #d0d0d0;
    margin-bottom: 10px;
    animation: shimmer 1s infinite;
    &.row-1 {
      width: 50%;
      height: 48px;
      margin-bottom: 50px;
    }
    &.row-2 {
      width: 70%;
      height: 30px;
      margin-bottom: 50px;
    }
  }
  .skeleton-filter-container {
    flex-wrap: nowrap;
    display: flex;
    width: 100%;
    margin-bottom: 30px;
    .filter {
      width: 40%;
      margin-right: 40px;
      height: 42px;
    }
    .button {
      width: 10%;
      height: 42px;
      border-radius: 8px;
    }
  }
  .skeleton-checkbox {
    flex-wrap: nowrap;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
    .box {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
    .box-label {
      width: 200px;
      &.toggle {
        width: 150px;
      }
    }
    .toggle-button {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-left: 10px;
    }
  }
}

.skeleton-animation {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
  animation: slide 1.5s infinite;
}

@keyframes slide {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

</style>
