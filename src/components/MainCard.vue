<template>
  <div class="card">
    <div class="card-header">
      <slot name="card-header"></slot>
    </div>
    <div class="card-content">
      <slot name="card-content"></slot>
    </div>
    <div class="card-footer">
      <slot name="card-footer"></slot>
    </div>
  </div>
</template>

<style>
.card {
  border: 1px solid rgb(86, 85, 85);
  border-radius: 18px;
  padding: 24px;
}
</style>
