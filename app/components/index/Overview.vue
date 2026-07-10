<script setup lang="ts">
import SmallCard from "~/components/project/SmallCard.vue";
import { FEATURED_PROJECT } from "~/utils/constants/projects";
import { FEATURED_SKILLS } from "~/utils/constants/skills";

const { data: posts } = await useAsyncData(() =>
  queryCollection("blog").order("date", "DESC").limit(3).all()
);

const { data: introductionPost } = await useAsyncData(() =>
  queryCollection("blog").where("num", "=", 2).first()
);

console.log(introductionPost.value);
</script>

<template>
  <section class="overview-section pb-1 lg:pb-5">
    <UContainer class="flex flex-col gap-4">
      <div class="flex flex-col items-center">
        <h2 class="text-xl md:text-3xl font-bold mb-2">Get to Know Me</h2>
        <div class="h-1 w-24 bg-primary mb-3" />
        <UBlogPost
          v-bind="introductionPost"
          orientation="horizontal"
          class="w-[60vw] object-contain" />
      </div>

      <div class="flex flex-col items-center">
        <h2 class="text-xl md:text-3xl font-bold mb-2">Most Recent Blog Posts</h2>
        <div class="h-1 w-24 bg-primary mb-3" />
        <UBlogPosts :posts="posts" />
      </div>

      <div class="flex flex-col items-center">
        <h2 class="text-xl md:text-3xl font-bold mb-2">Featured Projects</h2>
        <div class="h-1 w-24 bg-primary mb-3" />
        <div class="grid gap-3 w-full md:grid-cols-2 xl:grid-cols-5">
          <SmallCard v-for="project in FEATURED_PROJECT" :key="project.id" :project="project" />
        </div>
      </div>

      <div class="flex flex-col items-center">
        <h2 class="text-xl md:text-3xl font-bold mb-2">Featured Skills</h2>
        <div class="h-1 w-24 bg-primary mb-3" />
        <UMarquee pause-on-hover :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }">
          <SkillBadge
            v-for="skill in FEATURED_SKILLS.slice(FEATURED_SKILLS.length / 2)"
            :skill="skill"
            ignore-label
            size="xl"
            icon-size="3xl" />
        </UMarquee>
        <UMarquee
          reverse
          pause-on-hover
          :ui="{ root: '[--gap:--spacing(4)]', content: 'w-auto py-1' }">
          <SkillBadge
            v-for="skill in FEATURED_SKILLS.slice(0, FEATURED_SKILLS.length / 2)"
            :skill="skill"
            ignore-label
            size="xl"
            icon-size="3xl" />
        </UMarquee>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.overview-section {
  position: relative;
  overflow: hidden;
}

.overview-section::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 40%;
  height: 100%;
  background: radial-gradient(circle, rgba(var(--color-primary-500), 0.03) 10%, transparent 70%);
  z-index: 0;
  pointer-events: none;
}

/* Animate paragraphs when they come into view */
p {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: calc(var(--i, 0) * 0.15s);
}

p:nth-child(1) {
  --i: 1;
}
p:nth-child(2) {
  --i: 2;
}
p:nth-child(3) {
  --i: 3;
}
p:nth-child(4) {
  --i: 4;
}

p:nth-child(5) {
  --i: 5;
}

p:nth-child(6) {
  --i: 6;
}

p:nth-child(7) {
  --i: 7;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
