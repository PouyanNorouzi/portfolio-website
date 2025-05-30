<template>
  <footer class="bg-secondary p-4">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <!-- Socials and email in one row on desktop, stacked on mobile -->
        <div class="flex flex-col md:flex-row items-center mb-3 md:mb-0">
          <!-- Social links -->
          <div class="social-links flex items-center mb-3 md:mb-0 md:mr-6">
            <ULink
              to="https://www.linkedin.com/in/pouyan-norouzi/"
              target="_blank"
              external
              class="mx-2">
              <UIcon name="i-logos-linkedin-icon" class="text-2xl" />
            </ULink>
            <ULink to="https://github.com/PouyanNorouzi" target="_blank" external class="mx-2">
              <UIcon name="i-logos-github-icon" class="text-2xl" />
            </ULink>
          </div>
          <!-- Email -->
          <div class="email">
            <ULink raw to="mailto:pouyannorouzii@gmail.com" class="hover:text-primary"
              >pouyannorouzii@gmail.com
            </ULink>
          </div>
        </div>
        <!-- Copyright notice -->
        <p class="text-xs text-center md:text-right">
          © {{ new Date().getFullYear() }} Pouyan Norouzi. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
