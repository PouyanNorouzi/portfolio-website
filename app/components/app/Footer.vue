<script setup lang="ts">
import { EMAIL, EMAIL_ADDRESS, GITHUB_LINK, LINKEDIN_LINK } from "~/utils/constants/socials";

const now = useNow();
const year = computed(() => new Date(now.value).getFullYear());
</script>

<template>
  <footer>
    <div>
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Socials and email in one row on desktop, stacked on mobile -->
        <div class="flex flex-col md:flex-row items-center mb-3 md:mb-0">
          <!-- Social links -->
          <div class="social-links flex items-center mb-3 md:mb-0 md:mr-6">
            <ULink :to="LINKEDIN_LINK" target="_blank" external class="mx-2">
              <UIcon name="i-logos-linkedin-icon" class="text-2xl" />
            </ULink>
            <ULink :to="GITHUB_LINK" target="_blank" external class="mx-2">
              <UIcon name="i-simple-icons-github" class="text-2xl" />
            </ULink>
          </div>
          <!-- Email -->
          <div class="email">
            <ULink raw :to="EMAIL" class="hover:text-primary">{{ EMAIL_ADDRESS }}</ULink>
          </div>
        </div>
        <!-- Copyright notice -->
        <p class="text-xs text-center md:text-right">
          © {{ year }} Pouyan Norouzi. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
