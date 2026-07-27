<template>
  <GridBackground />
  <div class="flex w-full p-10 justify-center">
     <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="item in stats"
          :key="item.title"
          class="flex items-center gap-4 rounded-xl border border-steel bg-charcoal p-5 hover:border-orchid/50 transition-all"
        >
          <!-- Icon -->
          <div
            class="flex h-12 w-12 items-center justify-center rounded-lg bg-topbar text-orchid text-2xl bg-orchid/10"
          >
            <Icon :icon="item.icon" />
          </div>

          <!-- Content -->
          <div class="flex flex-col">
            <span class="text-2xl font-bold text-sage">
              {{ item.value }}
            </span>
            <span class="text-sm text-white">
              {{ item.title }}
            </span>
          </div>
        </div>
      </div>
  </div>

  <div
    class="my-6 h-px bg-gradient-to-r from-transparent via-steel/40 to-transparent">
  </div>

  <div class="w-full px-6 md:px-10 lg:px-16 xl:px-20">
    <div class="mx-auto max-w-7xl">

      <!-- Section Heading -->
      <div class="mb-8">
        <h2 class="mb-2 text-3xl text-keyword">
          Technical Skills
        </h2>

        <p class="max-w-3xl leading-7 text-white">
          Over the past <span class="text-keyword">6+ years</span>, I've worked with a diverse
          set of technologies to build scalable web applications, develop RESTful APIs,
          create responsive user interfaces, and deliver reliable software solutions.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="item in skills"
          :key="item.title"
          class="flex items-center gap-4 rounded-xl border border-steel bg-charcoal p-5 hover:border-orchid/50 transition-all"
        >
          <!-- Icon -->
          <div
            class="flex h-12 w-12 items-center justify-center rounded-lg text-2xl"
            :style="{ backgroundColor: `${item.bg_color}14` }"
          >
            <Icon :icon="item.icon" color="#C595C6"/>
          </div>

          <!-- Content -->
          <div class="flex flex-col">
            <span class="text-2xl leading-relaxed text-keyword">
              {{ item.title }}
            </span>
            <span class="text-sm text-white">
              {{ item.description }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pb-20"></div>

</template>


<script setup>
 import GridBackground from '@/components/ui/GridBackground.vue';
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue';

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ]

  const stats = [
    {
      icon: 'solar:code-bold',
      value: '6+',
      title: 'Years Experience',
    },
    {
      icon: 'solar:folder-bold',
      value: '12+',
      title: 'Projects',
    },
    {
      icon: 'solar:code-square-bold',
      value: '15+',
      title: 'Technologies',
    },
    {
      icon: 'solar:users-group-rounded-bold',
      value: '3',
      title: 'Companies',
    },
  ]

  const skills = [
  {
    icon: 'logos:laravel',
    bg_color: '#EB2D21',
    title: 'Laravel',
    description: 'REST APIs & MVC'
  },
  {
    icon: 'logos:php',
    bg_color: '#6181B6',
    title: 'PHP',
    description: 'Backend Development'
  },
  {
    icon: 'logos:mysql',
    bg_color: '#056C84',
    title: 'MySQL',
    description: 'Database Design'
  },
  {
    icon: 'logos:postman-icon',
    bg_color: '#FF6C37',
    title: 'Postman',
    description: 'API Testing'
  },
  {
    icon: 'logos:git-icon',
    bg_color: '#DE4C36',
    title: 'Git',
    description: 'Version Control'
  },
  {
    icon: 'carbon:api',
    bg_color: '#B88CB9',
    title: 'REST API',
    description: 'API Integration'
  },
  {
    icon: 'logos:javascript',
    bg_color: '#F7DF1E',
    title: 'JavaScript',
    description: 'ES6+ & DOM'
  },
  {
    icon: 'logos:vue',
    bg_color: '#41B883',
    title: 'Vue.js',
    description: 'Composition API'
  },
  {
    icon: 'logos:react',
    bg_color: '#00D8FF',
    title: 'React.js',
    description: 'Hooks & Components'
  },
  {
    icon: 'logos:tailwindcss-icon',
    bg_color: '#18B6B9',
    title: 'Tailwind CSS',
    description: 'Utility-first CSS'
  },
  {
    icon: 'logos:html-5',
    bg_color: '#E44D26',
    title: 'HTML5',
    description: 'Semantic Markup'
  },
  {
    icon: 'logos:bootstrap',
    bg_color: '#7E13F8',
    title: 'Bootstrap',
    description: 'Responsive UI'
  },
  {
    icon: 'logos:jquery',
    bg_color: '#255481',
    title: 'jQuery',
    description: 'DOM & AJAX'
  },
  {
    icon: 'logos:css-3',
    bg_color: '#264DE4',
    title: 'CSS3',
    description: 'Responsive Styling'
  },
  {
    icon: 'logos:github-copilot',
    bg_color: '#264DE4',
    title: 'GitHub Copilot',
    description: 'AI Code Assistant'
  },
  {
    icon: 'logos:google-gemini',
    bg_color: '#579CE5',
    title: 'Antigravity IDE',
    description: 'AI Code Review'
  },
  {
    icon: 'logos:figma',
    bg_color: '#F16D5F',
    title: 'Figma',
    description: 'UI/UX Design'
  },
  {
    icon: 'simple-icons:canva',
    bg_color: '#00C4CC',
    title: 'Canva',
    description: 'Graphic Design'
  },
  {
    icon: 'logos:wordpress-icon',
    bg_color: '#21759B',
    title: 'WordPress',
    description: 'CMS Development'
  }
]

  // const skills = [
  //   {
  //     icon : 'logos:laravel',
  //     bg_color : '#EB2D21',
  //     title : 'Laravel',
  //     description : 'REST APIs & MVC Architecture'
  //   },

  //   {
  //     icon :'logos:php',
  //     bg_color : '#6181B6',
  //     title : 'PHP',
  //     description : 'Backend Development'
  //   },
  //   {
  //     icon : 'logos:mysql',
  //     bg_color : '#056C84',
  //     title : 'Mysql',
  //     description : 'Database Design & Optimization'
  //   },
  //   {
  //     icon : 'logos:postman-icon',
  //     bg_color : '#FF6C37',
  //     title : 'Postman',
  //     description : 'API Testing & Documentation'
  //   },
  //   {
  //     icon : 'logos:git-icon',
  //     bg_color : '#DE4C36',
  //     title : 'GIT',
  //     description : 'Version Control & Collaboration'
  //   },
  //   {
  //     icon : 'carbon:api',
  //     bg_color : '#B88CB9',
  //     title : 'REST API',
  //     description : 'Version Control & Collaboration'
  //   },
  //   {
  //     icon : 'logos:javascript',
  //     bg_color : '#F7DF1E',
  //     title : 'Javascript',
  //     description : 'ES6+ & DOM Manipulation'
  //   },
  //   {
  //     icon : 'logos:vue',
  //     bg_color : '#41B883',
  //     title : 'Vuejs',
  //     description : 'Vue 3 & Composition API'
  //   },
  //   {
  //     icon : 'logos:react',
  //     bg_color : '#00D8FF',
  //     title : 'Reactjs',
  //     description : 'Components & Hooks'
  //   },
  //   {
  //     icon : 'logos:tailwindcss-icon',
  //     bg_color : '#18B6B9',
  //     title : 'Tailwind',
  //     description : 'Utility-first Styling'
  //   },
  //   {
  //     icon : 'logos:html-5',
  //     bg_color : '#E44D26',
  //     title : 'HTML',
  //     description : 'Semantic & Accessible Markup'
  //   },
  //   {
  //     icon : 'logos:bootstrap',
  //     bg_color : '#7E13F8',
  //     title : 'Bootstrap',
  //     description : 'Responsive UI Framework'
  //   },
  //   {
  //     icon : 'logos:jquery',
  //     bg_color : '#255481',
  //     title : 'Jquery',
  //     description : 'DOM & AJAX'
  //   },
  //   {
  //     icon : 'logos:css-3',
  //     bg_color : '#264DE4',
  //     title : 'Css',
  //     description : 'Responsive Layouts & Animations'
  //   },
  //   {
  //     icon : 'logos:github-copilot',
  //     bg_color : '#264DE4',
  //     title : 'Copilot',
  //     description : 'AI-assisted Coding'
  //   },
  //   {
  //     icon : 'logos:google-gemini',
  //     bg_color : '#579CE5',
  //     title : 'Anti-Gravity IDE',
  //     description : 'AI-assisted Development / Code review'
  //   },
  //   {
  //     icon : 'logos:figma',
  //     bg_color : '#F16D5F',
  //     title : 'Figma',
  //     description : 'UI/UX Design & Prototyping'
  //   },
  //   {
  //     icon : 'simple-icons:canva',
  //     bg_color : '#C595C6',
  //     title : 'Canva',
  //     description : 'Graphic Design'
  //   },
  //   {
  //     icon : 'logos:wordpress-icon',
  //     bg_color : '#C595C6',
  //     title : 'Wordpress',
  //     description : 'Theme Development & CMS'
  //   },



    
    

    

    

    

    

     

    

    

     

    

    

    

    
    
  // ]

  const activeTab = ref('overview')
</script>

