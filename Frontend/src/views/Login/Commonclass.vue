
<template>
    <div class="mainclass">
        <div class="box">
            <h2 class="commonfont">Common Class input/select</h2>
   
         <div class="commonloader">
            <div class="commonloader-spinner"></div>
            <img :src="iconUrl" class="commonloader-img" />
        </div>

            <div class="ex"> <input class="commoninput" placeholder="Normal Input"></div>

            <div class="ex"> <input type="text" v-model="dob" class="dob-field commoninput" placeholder="Select Date"></div>

            <div class="ex">
                <select class="commonselect">
                    <option value="0"> Select</option>
                    <option value="1"> options A</option>
                    <option value="2"> options B</option>
                </select>
            </div>

            <div class="ex">
                <div class="commonsearch-wrapper" @focusout="hideDropdown">
                <input type="text" v-model="searchQuery" @focus="isDropdownVisible = true"
                placeholder="Search Select..."  class="commoninput" autocomplete="off">
                <span class="icon-wrapper" @click="toggleDropdown" :class="{ 'is-active': isDropdownVisible }">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6" />
                    </svg>
                </span>
                <ul v-if="isDropdownVisible" class="commondropdown-list">
                    <li v-for="opt in filteredOptions" :key="opt.value" @click="selectOption(opt)">
                    {{ opt.text }}
                    </li>
                    <li v-if="filteredOptions.length === 0">No results found</li>
                </ul>
                </div>
            </div>

            <div class="ex">
                <button type="button" class="commonbtn">button tag</button> <br><br>
                <input type="button" value="input button"  class="commonbtn"><br><br>   
            </div>

            <div class="ex">
                <input type="checkbox" class="commoncheckbox"> Checkbox
            </div>

        <div class="commonradio-group">
            <input type="radio" id="male" name="gender" value="male" checked>
            <label for="male">
                <span class="radio-dot"></span>
                Male
            </label>

            <input type="radio" id="female" name="gender" value="female">
            <label for="female">
                <span class="radio-dot"></span>
                Female
            </label>
            </div>
            <br>
            
        </div>
        <div class="box">
            <table class="commontbls">
                <thead>
                    <tr>
                        <th>S No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Address</th>
                    </tr>   
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Naresh</td>
                        <td>25</td>
                        <td>Developer</td>
                        <td>AAA BBB CCC,  Kumbakonam 612001</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Vicraman</td>
                        <td>25</td>
                        <td>Developer</td>
                        <td>AAA BBB CCC,  Kumbakonam 612001</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Naveen</td>
                        <td>22</td>
                        <td>Developer</td>
                        <td>AAA BBB CCC, Kumbakonam 612001</td>
                    </tr>
                </tbody>    
            </table>
            <br>
            <div class="commonalert">
                <div class="comalerttext">Alert</div>
                <div class="comalertcross">X</div>
                <div class="Message">Show your text here...</div>
            </div>
            <br>
            <div class="commonalert">
                <div class="comalerttext">Confirmation </div>
                <div class="comalertcross">X</div>
                <div class="Message">Are you want to confirm this Entry?</div>
                <div class="buttonsection">
                    <button type="button" class="confirmbtn">Confirm</button>
                    <button type="button" class="confirmbtn">Cancel</button>
                </div>
            </div>
            <br>
            

          
            <div class="commonpro-loader" role="status">
                <div class="commonpro-top">
                    <i class="commonpro-dot"></i><i class="commonpro-dot"></i><i class="commonpro-dot"></i>
                    <div class="commonpro-url"></div>
                </div>
                <div class="commonpro-body">
                    <div class="commonpro-row h1"></div>
                    <!-- <div class="commonpro-row"></div>
                    <div class="commonpro-row"></div> -->
                    <div class="commonpro-row sh"></div>
                    <div class="commonpro-trace"></div>
                    <div class="commonpro-load">Processing Please wait<span>...</span></div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer" style="position: fixed; bottom: 10px; width: 90%; margin: auto 5%;gap:5px;display: flex">
    <button @click="setTheme('root')" class="commonbtn">
      Root (Light)
    </button> 

    <button @click="setTheme('dark-green')" class="commonbtn">
      Dark & Green
    </button>
    
    <button @click="setTheme('dark-blue')" class="commonbtn">
      Dark & Blue
    </button>

     <button @click="setTheme('plesent')" class="commonbtn">
     plesent
    </button>

     <button @click="setTheme('warm')" class="commonbtn">
     warm
    </button>
  </div>

 
</template>

<style>
    @import "@/components/Commonstyle.css";
    .mainclass{
        width: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
    }
    .box{
        margin: 20px auto;
        display: block;
        width: 80%;
    }
    .box .ex{
        margin: 20px;
    }
</style>

<script setup>
import iconUrl from './Images/Iconlogo.png';
import { ref, computed, onMounted } from 'vue';
import { initDatePicker } from '../../components/commondatepicker.js'; 

// Loader
const isLoaded = ref(false);

// Dropdown Logic
const searchQuery = ref('');
const isDropdownVisible = ref(false);
const options = ref([
  { value: 'A', text: 'Option A' },
  { value: 'B', text: 'Option B' },
  { value: 'C', text: 'Option C' },
  { value: 'D', text: 'Apple' },
  { value: 'E', text: 'Banana' },
]);

const filteredOptions = computed(() => {
  return options.value.filter(opt => 
    opt.text.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const selectOption = (opt) => {
  searchQuery.value = opt.text;
  isDropdownVisible.value = false;
};

const hideDropdown = () => {
  setTimeout(() => { 
    isDropdownVisible.value = false; 
  }, 200);
};

// Theme
const currentTheme = ref('root');

const setTheme = (theme) => {
  currentTheme.value = theme;
  document.body.classList.remove('dark', 'blue-theme', 'plesent', 'warm');

  if (theme === 'dark-green') {
    document.body.classList.add('dark');
  } else if (theme === 'dark-blue') {
    document.body.classList.add('blue-theme');
  } else if (theme === 'plesent') {
    document.body.classList.add('plesent');
  } else if (theme === 'warm') {
    document.body.classList.add('warm');
  }
};

// DatePicker
const dob = ref('');

onMounted(() => {
  initDatePicker('.dob-field');
});
</script>
