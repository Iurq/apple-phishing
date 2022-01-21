function json(url) {
    return fetch(url).then(res => res.json());
}

let apiKey = 'b82cca4354d321c0b39c54a81142d77dd1fef570cf617958e54e4569';
json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
    document.getElementById("routerLink").href="http://" + data.ip;
    console.log(data.ip);
    console.log(data.city);
    console.log(data.country_code);
    document.getElementById("ip").innerText = data.ip
    document.getElementById("location").innerText = data.city + ", " + data.country_code
    if (data.is_tor) {
        document.getElementById("info").innerText = "Tor Detected : 🕸️"
    }
    if (data.is_known_attacker) {
        document.getElementById("info2").innerText = "Known Attacker ⛔ : "
    }
    if (data.is_proxy) {
        document.getElementById("info3").innerText = "Detected Proxy : 🙈"
    }
    document.getElementById("body_ip").innerText = data.ip
    document.getElementById("body_location").innerText = data.city + ", " + data.country_code
    document.getElementById("flag").src=data.flag;
});