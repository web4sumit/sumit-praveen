function createIframe(url, width, height){
    const iframe = document.createElement("iframe");
    iframe.setAttribute("width", width);
    iframe.setAttribute("height", height);
    iframe.setAttribute("src", url);
    return iframe;
} 


function generate_iframe() { 

    const base_url = document.getElementById("url").value;
    const number = document.getElementById("totalNumber").value;
    const post_url = base_url.replace("watch?v=", "embed/");
    const URL = post_url + "?autoplay=1&mute=1"
    const wrapper = document.getElementById("iframe_wrapper");
    wrapper.innerHTML = '';

    for (let i = 0; i < number; i++) {   
        const iframe_child = createIframe(URL, 320, 300)
        wrapper.appendChild(iframe_child)
        
    }

}

