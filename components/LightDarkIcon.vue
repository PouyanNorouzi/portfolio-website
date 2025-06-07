<script setup lang="ts">
interface Props {
  icon: LightAndDarkIcon | string;
}

defineProps<Props>();

const colorMode = useColorMode();

const isDarkMode = computed(() => colorMode.value === "dark");

</script>

<template>
<UIcon v-if="typeof icon === 'string'" :name="icon"/>
<div v-else>
    <UIcon v-show="!isDarkMode" :name="icon.lightIcon"/>
    <UIcon v-show="isDarkMode" :name="icon.darkIcon"/>
</div>
</template>
