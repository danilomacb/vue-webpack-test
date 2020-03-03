<template>
    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/page1">Page1</router-link></li>
    </ul>
</template>

<script>
export default {
    name: 'NavBar' 
}
</script>

<style scoped>
    ul {
        width: 100%;
        background-color: black;
        color: white;
    }
    li {
        display: inline-block;
        padding: 10px;
    }
    a {
        color: white;
        text-decoration: none;
    }
</style>