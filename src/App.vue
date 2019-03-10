<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label>select Template</label>
            <select v-model="componentName" class="form-control form-control-sm">
              <option value="helloworld">type One</option>
              <option value="helloworldtwo">type two</option>
              <option value="helloworldthree">type three</option>
              <option value="helloworldfour">type Four</option>
            </select>
          </div>
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              v-model="name"
              class="form-control form-control-sm"
              placeholder="Name"
            >
          </div>
          <div class="form-group">
            <label>Objective</label>
            <textarea v-model="objective" class="form-control form-control-sm"></textarea>
          </div>
          <div class="form-group">
            <label>Add Skills</label>
            <textarea
              v-on:keyup.enter="pushSkills"
              type="text"
              v-model="addSkills"
              class="form-control form-control-sm"
            ></textarea>
            <strong class="text-muted">Hit Enter To add More</strong>
          </div>
          <div class="col">
            <ul>
              <li
                v-for="(item, index) in skills"
                :key="index"
                v-on:click="removeData(index,skills)"
              >{{item}}</li>
            </ul>
            <small class="text-muted">Click on Skills to remove</small>
          </div>
          <br>
          <div class="form-group form-check">
            <input
              type="checkbox"
              v-model="experenceCheckBox"
              v-on:click="experenceToggle"
              class="form-check-input"
            >
            <label class="form-check-label" for="exampleCheck1">Do You Have Experience</label>
          </div>
          <div id="experienceDiv" v-show="experenceCheckBox">
            <div v-for="(exp, index) in experince" :key="index">
              <div class="form-group">
                <label for="jobTitle">Job Title</label>
                <input
                  type="text"
                  v-model="exp.jobTitle"
                  class="form-control form-control-sm"
                  placeholder="Job Title"
                >
              </div>
              <div class="form-group">
                <label for="jobTitle">Company Name</label>
                <input
                  type="text"
                  v-model="exp.jobTitle"
                  class="form-control form-control-sm"
                  placeholder="Job Title"
                >
              </div>

              <div class="form-group">
                <label for="jobTitle">Start Date</label>
                <input
                  type="date"
                  v-model="exp.startDate"
                  class="form-control form-control-sm"
                  placeholder="Job Title"
                >
              </div>

              <div class="form-group">
                <label for="jobTitle">End Date</label>
                <input
                  type="date"
                  v-model="exp.endDate"
                  class="form-control form-control-sm"
                  placeholder="Job Title"
                >
              </div>
            </div>

            <div>
              <button v-on:click="addMoreExperience" class="btn">+Add More</button>
            </div>
          </div>
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

export default {
  name: "App",
  data() {
    return {
      name: "",
      addSkills: "",
      objective: "",
      skills: [],
      education: [
        {
          degreeName: "",
          startDate: "",
          endDate: ""
        }
      ],
      experince: [
        {
          jobTitle: "",
          companyName: "",
          startDate: "",
          endDate: ""
        }
      ],
      experenceCheckBox: false,
      componentName: "helloworld"
    };
  },
  methods: {
    pushSkills() {
      console.log(this.addSkills);
      this.skills.push(this.addSkills);
      this.addSkills = "";
    },
    removeData(index, nameOfAnArray) {
      nameOfAnArray.splice(index, 1);
    },
    experenceToggle() {
      this.experenceCheckBox = !false;
    },
    addMoreExperience() {
      this.experince.push({
        jobTitle: "",
        companyName: "",
        startDate: "",
        endDate: ""
      });
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
