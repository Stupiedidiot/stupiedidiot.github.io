// This adds a message at the top of each page!
demo_message = document.createElement("div")
demo_message.id = "demo_message"
demo_message.innerHTML =`
<style>
#demo_message {
    top: 0;
    position: sticky;
    z-index: 100;
    background-color: white;
    color: black;
    border-bottom: 3px solid black;
    padding: 1rem;
    > span { font-weight: bolder; font-family: var(--display-font); }
    > a { text-decoration: none; color: lightgray; font-family: var(--display-font); }
    > a:hover { color: #c02832; }
}
</style>
<span>Attention:</span> This page is a demo!! - <a href="https://stupied-portfolio.neocities.org/">✮ head back »</a>
`
document.getElementsByTagName('body')[0].prepend(demo_message)