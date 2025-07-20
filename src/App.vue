<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 font-sans">
    <header class="bg-white shadow p-4 mb-6">
      <div class="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <h1 class="text-xl sm:text-2xl font-bold text-teal-600">Vue Blog App</h1>
        <nav class="space-x-4">
          <router-link to="/" class="text-teal-600 hover:underline">Home</router-link>
          <router-link to="/create" class="text-teal-600 hover:underline">Create</router-link>
        </nav>
      </div>
    </header>
    <main class="max-w-5xl mx-auto px-4 sm:px-6">
      <router-view />
    </main>
  </div>
</template>