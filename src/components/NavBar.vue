<template>
    <ul>
        <li><a href="/">home</a></li>
        <li><a href="/test">test</a></li>
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