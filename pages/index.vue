<template>
  <div v-if="header" v-html="header"></div>
  <directory-widget partner="307"></directory-widget>
  <loader v-if="!widgetLoaded"> loading ...</loader>
  <div v-if="footer" v-html="footer"></div>
</template>
<script setup lang="ts">
import { html } from "../data/contrave.js";
import Loader from "~/components/loader.vue";
const header = ref<string | undefined>("");
const footer = ref<string | undefined>("");
const widgetLoaded = ref(false)
const styles = ref<any[]>([]);

const getStaticHtml = async (): Promise<string> => {
  const response: Response = await fetch("https://doctors.contrave.com");
  return response.text();
};

const getElementFromDoc = (doc: Document, tag: string) => {
  const htmlElement = doc.querySelector(tag);
  return htmlElement?.outerHTML;
};

const getStylesFromSite = (doc: HTMLDocument) => {
  return Array.from(
    doc.querySelectorAll("link[rel=stylesheet][href*=v2]"),
    (element: any) => {
      const parsedHref = element.href;
      return {
        rel: "stylesheet",
        type: "text/css",
        href: `${element.href
          .replace("http://localhost:3000", "https://pat2-directory.doctor.com/")
          .replace(
            "https://develop-directories.doctor.com",
            "https://pat2-directory.doctor.com/"
          )}`,
      };
    }
  );
};

onMounted(() => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  header.value = getElementFromDoc(doc, "header");
  footer.value = getElementFromDoc(doc, "footer");

  const body: any = document.querySelector("body");

  body.addEventListener("ON_SHOW_PROFILE_CHANGE", (event: any) => {
    console.log("Show profile change: " + event.detail.value);
  });
  body.addEventListener("WIDGET_LOADED", (event: any) => {
    widgetLoaded.value = true
    console.log("widget loaded: " + event.detail.value);
  });
});

useHead({
  title: "Find a Weight Loss Doctor Near You | CONTRAVE (naltrexone HCl/bupropion HCl)",
  meta: [
    {
      name: "description",
      content:
        "Let us help you locate a weight-loss doctor in your area and get started on your weight-loss journey today.",
    },
  ],
  bodyAttrs: {
    class: "test",
  },
  link: [],
  script: [
    {
      src: "https://pat2-widget.doctor.com/directory_v2/widget_app.js",
      id: "directory-widget",
      defer: true,
    },
  ],
});
</script>
<style>
@import "../data/css1.css";
@import "../data/css2.css";
@import "../data/css3.css";
header {
  margin-bottom: 100px;
}
footer {
  margin-top: 50px;
}
directory-widget {
  max-width: 100% !important;
}
</style>
