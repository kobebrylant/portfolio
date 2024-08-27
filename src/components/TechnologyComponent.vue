<template>
  <div
    id="technologies"
    class="w-full"
  >
    <h1 class="pb-2 font-medium text-3xl mb-5 bg-gradient-to-r from-violet-600 to-cyan-300 bg-clip-text text-transparent ">
      Technologies
    </h1>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <ButtonComponent
        name="Java"
        :logo="JavaIcon"
      />
      <ButtonComponent
        name="AWS"
        :logo="AwsIcon"
      />
      <ButtonComponent
        name="TypeScript"
        :logo="TypeScriptIcon"
      />
      <ButtonComponent
        name="Vue.js"
        :logo="VueIcon"
      />
      <ButtonComponent
        name="Okta"
        :logo="OktaIcon"
      />
      <ButtonComponent
        name="Node.js"
        :logo="NodeJsIcon"
      />
      <ButtonComponent
        name="PostgreSQL"
        :logo="PostgreSqlIcon"
      />      <ButtonComponent
        name="Jira"
        :logo="JiraIcon"
      />      <ButtonComponent
        name="JavaScript"
        :logo="JsIcon"
      />      <ButtonComponent
        name="Magnolia"
        :logo="MagnoliaIcon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue'
import JavaIcon from '../assets/icons/JavaIcon.vue'
import TypeScriptIcon from '../assets/icons/TypeScriptIcon.vue'
import AwsIcon from '../assets/icons/AwsIcon.vue'
import VueIcon from '../assets/icons/VueIcon.vue'
import OktaIcon from '../assets/icons/OktaIcon.vue'
import NodeJsIcon from '../assets/icons/NodeJsIcon.vue'
import PostgreSqlIcon from '../assets/icons/PostgreSqlIcon.vue'
import JiraIcon from '../assets/icons/JiraIcon.vue'
import JsIcon from '../assets/icons/JsIcon.vue'
import MagnoliaIcon from '../assets/icons/MagnoliaIcon.vue'
</script>
