<template>
  <div
    v-cloak
    :class="sidebarOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'"
    class="transition duration-300 transform fixed right-0 top-0 h-screen bg-secondary z-50 pt-6 w-64 sm:hidden"
  >
    <button
      @click="sidebarOpen = !sidebarOpen"
      title="tailwindcss"
      class="nav-toggle absolute pin-0 right-0 pr-6 focus:outline-none"
    >
      <img alt="Tailwindcss components" src="/svg/close.svg" class="h-4" />
    </button>

    <nav
      class="relative flex-col items-center justify-end flex-1 mt-12 main-nav sm:flex sm:mt-0 sm:flex-row"
    >
      <div class="relative flex flex-col items-center justify-end flex-1 sm:flex-row">
        <a
          title="Tailwind CSS"
          href="/"
          class="py-2 sm-4 sm:py-2 sm:px-4 text-white sm:text-secondary opacity-75 hover:opacity-100"
          >Home</a
        >

        <div class="relative user">
          <a
            title="Tailwind css components"
            href="/components"
            class="block py-2 sm:py-4 sm:px-4 text-white sm:text-secondary opacity-75 hover:opacity-100"
            >Components</a
          >

          <div class="absolute left-0 hidden opacity-0 pointer-events-none sm:block dropdown">
            <div class="flex flex-col bg-white border border-gray-200 rounded shadow-lg">
              <a
                title="TailwindCSS Buttons"
                href="/components/Buttons"
                class="w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                >Buttons</a
              >
              <a
                title="TailwindCSS Forms"
                href="/components/Forms"
                class="w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                >Forms</a
              >
              <a
                title="TailwindCSS Navigations"
                href="/components/Navigations"
                class="w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                >Navigations</a
              >
              <a
                title="TailwindCSS Cards"
                href="/components/Cards"
                class="w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                >Cards</a
              >
              <a
                title="TailwindCSS Widget"
                href="/components/Widget"
                class="w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                >Widget</a
              >
              <a
                title="TailwindCSS Tables"
                href="/components/Tables"
                class="w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                >Tables</a
              >
              <a
                title="TailwindCSS Layouts"
                href="/components/Layouts"
                class="w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                >Layouts</a
              >
            </div>
          </div>
        </div>

        <a
          title="Tailwind css premium components"
          href="/premium"
          class="py-2 sm:py-4 sm:px-4 text-white sm:text-secondary opacity-75 hover:opacity-100"
          >Premium</a
        >
        <a
          title="Tailwind components blog"
          href="/blog"
          class="py-2 sm:py-4 sm:px-4 text-white sm:text-secondary font-bold"
          >Blog</a
        >

        <button
          v-cloak
          @click="searchOpen = !searchOpen"
          class="py-2 sm:py-4 sm:px-4 text-white sm:text-secondary focus:outline-none hidden lg:block"
        >
          <svg
            :class="searchOpen ? 'hidden' : ''"
            class="w-4 h-4 opacity-75 fill-current"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
          >
            <path
              d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
              fillRule="evenodd"
            ></path>
          </svg>
          <svg
            v-cloak
            :class="searchOpen ? '' : 'hidden'"
            class="w-4 h-3 opacity-75 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 375 375"
          >
            <defs />
            <g ill-rule="nonzero">
              <path
                d="M368.663 339.414L35.873 6.624c-8.076-8.076-21.172-8.076-29.249 0-8.076 8.077-8.076 21.173 0 29.25l332.79 332.79c8.078 8.076 21.172 8.076 29.25 0 8.076-8.078 8.076-21.172 0-29.25z"
              />
              <path
                d="M339.414 6.624L6.624 339.414c-8.076 8.077-8.077 21.172 0 29.25 8.078 8.076 21.173 8.076 29.25 0l332.79-332.79c8.076-8.078 8.076-21.172 0-29.25-8.078-8.077-21.172-8.077-29.25 0z"
              />
            </g>
          </svg>
        </button>

        <form
          v-cloak
          :class="searchOpen ? '' : 'hidden'"
          class="absolute right-0 top-0 mt-2 mr-12 w-full"
          action="/search"
        >
          <input
            type="search"
            name="query"
            class="w-full h-10 p-4 mr-4 text-sm text-gray-600 bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0"
            placeholder="Press enter to search"
          />
        </form>
      </div>

      <div
        class="flex flex-col items-center mt-2 sm:mt-0 sm:flex-row sm:border-l sm:border-gray-300"
      >
        <a
          rel="nofollow"
          title="Submit Tailwind component"
          class="px-3 py-2 font-bold text-white rounded sm:ml-4 md:px-4 bg-primary hover:bg-teal-300"
          href="/submit-component"
          >Submit your own</a
        >
        <div class="items-center hidden sm:flex">
          <div class="relative flex pl-4 cursor-pointer user items-cente">
            <img
              class="object-cover w-8 h-8 mr-2 rounded-full"
              src="https://avatars.githubusercontent.com/u/837026?v=4"
              alt="serbe"
            />
            <div class="absolute right-0 mt-8 opacity-0 pointer-events-none dropdown">
              <div
                class="flex flex-col items-end mt-2 bg-white border border-gray-200 rounded shadow-lg"
              >
                <a
                  title="My components"
                  href="/u/serbe"
                  class="block px-4 py-2 text-sm text-right opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                  >My components</a
                >
                <a
                  title="Profile Settings"
                  href="/u/serbe/edit"
                  class="block px-4 py-2 text-sm text-right opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                  >Profile Settings</a
                >
                <form
                  id="logout-form"
                  class="leading-none"
                  action="https://tailwindcomponents.com/logout"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="wrM3up2TY5qx3AOtkRmVzi9uGZ9R7psQzNAhQWfV"
                  />
                  <button
                    class="block px-4 py-2 text-sm text-right opacity-75 text-secondary hover:opacity-100 whitespace-nowrap focus:outline-none"
                  >
                    Logout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center mt-8 border-t border-gray-700 sm:hidden">
          <p class="pt-4 font-bold text-white">serbe</p>
          <a
            title="My Tailwind components"
            href="/u/serbe"
            class="py-2 text-white opacity-75 sm:py-4"
            >My components</a
          >
          <a
            title="Profile Settings"
            href="/u/serbe/edit"
            class="py-2 text-white opacity-75 sm:py-4"
            >Profile Settings</a
          >

          <form
            id="logout-form"
            class="leading-none"
            action="https://tailwindcomponents.com/logout"
            method="POST"
          >
            <input type="hidden" name="_token" value="wrM3up2TY5qx3AOtkRmVzi9uGZ9R7psQzNAhQWfV" />
            <button class="py-2 text-white opacity-75 sm:py-4 focus:outline-none">Logout</button>
          </form>
        </div>
      </div>
    </nav>
  </div>

  <div class="min-h-screen flex flex-col">
    <header class="top-0 lef-0 w-full z-40 bg-white fixed border-b border-gray-200">
      <div class="container mx-auto px-6 h-16 flex justify-between items-center">
        <a title="tailwindcss components" href="/">
          <img
            alt="tailwind examples"
            src="/svg/logo-color.svg"
            class="h-8 sm:w-8 lg:w-auto object-cover object-left"
          />
        </a>

        <div class="hidden sm:block">
          <nav
            class="relative flex-col items-center justify-end flex-1 mt-12 main-nav sm:flex sm:mt-0 sm:flex-row"
          >
            <div class="relative flex flex-col items-center justify-end flex-1 sm:flex-row">
              <a
                title="Tailwind CSS"
                href="/"
                class="py-2 sm-4 sm:py-2 sm:px-4 text-white sm:text-secondary opacity-75 hover:opacity-100"
                >Home</a
              >

              <div class="relative user">
                <a
                  title="Tailwind css components"
                  href="/components"
                  class="block py-2 sm:py-4 sm:px-4 text-white sm:text-secondary opacity-75 hover:opacity-100"
                  >Components</a
                >

                <div class="absolute left-0 hidden opacity-0 pointer-events-none sm:block dropdown">
                  <div class="flex flex-col bg-white border border-gray-200 rounded shadow-lg">
                    <a
                      title="TailwindCSS Buttons"
                      href="/components/Buttons"
                      class="w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                      >Buttons</a
                    >
                    <a
                      title="TailwindCSS Forms"
                      href="/components/Forms"
                      class="w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                      >Forms</a
                    >
                    <a
                      title="TailwindCSS Navigations"
                      href="/components/Navigations"
                      class="w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                      >Navigations</a
                    >
                    <a
                      title="TailwindCSS Cards"
                      href="/components/Cards"
                      class="w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                      >Cards</a
                    >
                    <a
                      title="TailwindCSS Widget"
                      href="/components/Widget"
                      class="w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                      >Widget</a
                    >
                    <a
                      title="TailwindCSS Tables"
                      href="/components/Tables"
                      class="w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                      >Tables</a
                    >
                    <a
                      title="TailwindCSS Layouts"
                      href="/components/Layouts"
                      class="w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                      >Layouts</a
                    >
                  </div>
                </div>
              </div>

              <a
                title="Tailwind css premium components"
                href="/premium"
                class="py-2 sm:py-4 sm:px-4 text-white sm:text-secondary opacity-75 hover:opacity-100"
                >Premium</a
              >
              <a
                title="Tailwind components blog"
                href="/blog"
                class="py-2 sm:py-4 sm:px-4 text-white sm:text-secondary font-bold"
                >Blog</a
              >

              <button
                v-cloak
                @click="searchOpen = !searchOpen"
                class="py-2 sm:py-4 sm:px-4 text-white sm:text-secondary focus:outline-none hidden lg:block"
              >
                <svg
                  :class="searchOpen ? 'hidden' : ''"
                  class="w-4 h-4 opacity-75 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                >
                  <path
                    d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
                    fillRule="evenodd"
                  ></path>
                </svg>
                <svg
                  v-cloak
                  :class="searchOpen ? '' : 'hidden'"
                  class="w-4 h-3 opacity-75 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 375 375"
                >
                  <defs />
                  <g ill-rule="nonzero">
                    <path
                      d="M368.663 339.414L35.873 6.624c-8.076-8.076-21.172-8.076-29.249 0-8.076 8.077-8.076 21.173 0 29.25l332.79 332.79c8.078 8.076 21.172 8.076 29.25 0 8.076-8.078 8.076-21.172 0-29.25z"
                    />
                    <path
                      d="M339.414 6.624L6.624 339.414c-8.076 8.077-8.077 21.172 0 29.25 8.078 8.076 21.173 8.076 29.25 0l332.79-332.79c8.076-8.078 8.076-21.172 0-29.25-8.078-8.077-21.172-8.077-29.25 0z"
                    />
                  </g>
                </svg>
              </button>

              <form
                v-cloak
                :class="searchOpen ? '' : 'hidden'"
                class="absolute right-0 top-0 mt-2 mr-12 w-full"
                action="/search"
              >
                <input
                  type="search"
                  name="query"
                  class="w-full h-10 p-4 mr-4 text-sm text-gray-600 bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-400 focus:ring-0"
                  placeholder="Press enter to search"
                />
              </form>
            </div>

            <div
              class="flex flex-col items-center mt-2 sm:mt-0 sm:flex-row sm:border-l sm:border-gray-300"
            >
              <a
                rel="nofollow"
                title="Submit Tailwind component"
                class="px-3 py-2 font-bold text-white rounded sm:ml-4 md:px-4 bg-primary hover:bg-teal-300"
                href="/submit-component"
                >Submit your own</a
              >
              <div class="items-center hidden sm:flex">
                <div class="relative flex pl-4 cursor-pointer user items-cente">
                  <img
                    class="object-cover w-8 h-8 mr-2 rounded-full"
                    src="https://avatars.githubusercontent.com/u/837026?v=4"
                    alt="serbe"
                  />
                  <div class="absolute right-0 mt-8 opacity-0 pointer-events-none dropdown">
                    <div
                      class="flex flex-col items-end mt-2 bg-white border border-gray-200 rounded shadow-lg"
                    >
                      <a
                        title="My components"
                        href="/u/serbe"
                        class="block px-4 py-2 text-sm text-right opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                        >My components</a
                      >
                      <a
                        title="Profile Settings"
                        href="/u/serbe/edit"
                        class="block px-4 py-2 text-sm text-right opacity-75 text-secondary hover:opacity-100 whitespace-nowrap"
                        >Profile Settings</a
                      >
                      <form
                        id="logout-form"
                        class="leading-none"
                        action="https://tailwindcomponents.com/logout"
                        method="POST"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          value="wrM3up2TY5qx3AOtkRmVzi9uGZ9R7psQzNAhQWfV"
                        />
                        <button
                          class="block px-4 py-2 text-sm text-right opacity-75 text-secondary hover:opacity-100 whitespace-nowrap focus:outline-none"
                        >
                          Logout
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-col items-center mt-8 border-t border-gray-700 sm:hidden">
                <p class="pt-4 font-bold text-white">serbe</p>
                <a
                  title="My Tailwind components"
                  href="/u/serbe"
                  class="py-2 text-white opacity-75 sm:py-4"
                  >My components</a
                >
                <a
                  title="Profile Settings"
                  href="/u/serbe/edit"
                  class="py-2 text-white opacity-75 sm:py-4"
                  >Profile Settings</a
                >

                <form
                  id="logout-form"
                  class="leading-none"
                  action="https://tailwindcomponents.com/logout"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="_token"
                    value="wrM3up2TY5qx3AOtkRmVzi9uGZ9R7psQzNAhQWfV"
                  />
                  <button class="py-2 text-white opacity-75 sm:py-4 focus:outline-none">
                    Logout
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "Navbar",
    setup() {
      const open = ref(false);
      const switchOpen = () => {
        open.value = !open.value;
      };
      const closeOpen = () => {
        open.value = false;
      };

      return { open, switchOpen, closeOpen };
    },
  });
</script>
