<template>
  <div >
//Start Header Section
<b-row >  
    <b-col md="12" > 
      <div  class="fixed-top">
       <b-navbar toggleable="lg"  type="dark" variant="info">
           <b-navbar-brand href="#">NavBar</b-navbar-brand>
             <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                 <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item href="#">Link</b-nav-item>
                        <b-nav-item href="#" disabled>Disabled</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                        </b-nav-form>

                        <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                        </b-nav-item-dropdown>

                        <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
            </b-collapse>
         </b-navbar>
       </div>
     </b-col>
  </b-row>
//Start Main Body Section
        <b-container fluid>
             <b-row >
                   <router-view/>
             </b-row>
        </b-container>  

       <b-row >
           <div class="fixed-bottom bg-info" >
            <h1>Foter </h1>
          </div>
       </b-row>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hi{
    color:#bb2124;
    height:30px;
}
</style>