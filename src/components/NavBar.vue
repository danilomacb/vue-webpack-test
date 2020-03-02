<template>
    <ul>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/foo">foo</router-link></li>
        <li><router-link to="/bar">bar</router-link></li>
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