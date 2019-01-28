<template>
  <header id="header">
    <div class="container">
      <div class="header-content">
        <div class="left-side">
          <router-link :to="{ name: 'root'}">
            <img 
              src="//www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
              alt="" 
              class="logo" 
            >
          </router-link>
          <div class="search">
            <i class="fas fa-search" />
            <input 
              type="text" 
              @input="onSearchChange"
            >
          </div>
        </div>
        <div>
          <router-link :to="{ name: 'profile'}">
            Profile
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    onSearchChange() {
      // console.log(e.target.value)
    }
  }
}
</script>
<style lang="scss" scoped>
#header {
  padding: 10px 0;
  max-height: 50px; 
  background: #cccccc5c;
  border-top: #2ad181 3px solid;
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  height: stretch;
}
.left-side {
  display: flex;
  align-items: center;
}
.search {
  position: relative;
  margin-left: 20px;

  input {
    border-radius: 25px;
    border-color: #ccc;
    padding-left: 25px;

    &:focus {
      outline: none;
    }
  }

  i {
    position: absolute;
    top: 50%;
    left: 10px;
    font-size: 12px;
    transform: translateY(-50%);
    cursor: pointer;
  }
        
}

</style>