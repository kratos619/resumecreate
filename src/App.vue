<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label for>select Template</label>
            <select v-model="componentName" class="form-control">
              <option value="helloworld">type One</option>
              <option value="helloworldtwo">type two</option>
              <option value="helloworldthree">type three</option>
              <option value="helloworldfour">type Four</option>
            </select>
          </div>
          <div class="form-group">
            <label for>Name</label>
            <input
              type="text"
              v-model="name"
              class="form-control"
              placeholder="Name"
              aria-describedby="helpId"
            >
          </div>
          <div class="form-group">
            <label for>Objective</label>
            <textarea
              v-model="objective"
              class="form-control"
            ></textarea>
          </div>
          <div class="form-group">
            <label for>Add Skills</label>
            <textarea
              v-on:keyup.enter="pushSkills"
              type="text"
              v-model="addSkills"
              class="form-control"
            ></textarea>
            <strong class="text-muted">Hit Enter To add More</strong>
          </div>
          <p>
            <ul>
              <li  v-for="(item, index) in skills" :key="index" v-on:click="removeData(index,skills)">{{item}}</li>
            </ul>
            <small class="text-muted">Click on Skills to remove </small>
          </p>
        </div>
        <div class="col-md-8">
          <component 
          :skills="skills"
          :name="name"
          :objective="objective"
          :education="education"
          :experince="experince"
          :is="componentName"

          ></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import helloworld from "./components/HelloWorld.vue";
import helloworldtwo from "./components/HelloWorldTwo.vue";
import helloworldthree from "./components/HelloWorldThree.vue";
import helloworldfour from "./components/HelloWorldFour.vue";
import { log } from 'util';
export default {
  name: "App",
  data() {
    return {
      name: "",
      addSkills: "",
      objective:"",
      skills: [],
      education:[],
      experince: [],
      componentName: "helloworld"
    };
  },
  methods: {
    pushSkills() {
      console.log(this.addSkills);
      this.skills.push(this.addSkills);
      this.addSkills = "";
    },
    removeData(index,nameOfAnArray){
            nameOfAnArray.splice(index, 1);
    }
  },
  components: {
    helloworld,
    helloworldtwo,
    helloworldthree,
    helloworldfour
  }
};
</script>

<style>
</style>
