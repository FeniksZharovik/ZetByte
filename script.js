function start() {
    let res_msg = document.createElement('div');
    res_msg.innerHTML = "hello I'm Zet, nice to meet you. Is there anything I can do to help?";
    res_msg.setAttribute("class", "left");

    document.getElementById('msg_area').appendChild(res_msg);
}

document.getElementById('send').addEventListener("click", async(e) => {
    e.preventDefault();
    var req = document.getElementById("text").value;

    if (req == undefined || req == "") {
        // Do nothing
    } else {
        let res = "";
        await axios.get(`https://api.monkedev.com/fun/chat?msg=${req}`).then(data => {
            res = JSON.stringify(data.data.response);
        });

        let msg_req = document.createElement('div');
        let msg_res = document.createElement('div');

        let msgCon1 = document.createElement('div');
        let msgCon2 = document.createElement('div');

        msgCon1.setAttribute("class", "msgCon1");
        msgCon2.setAttribute("class", "msgCon2");

        msg_req.innerHTML = req;
        msg_res.innerHTML = res;

        msg_req.setAttribute("class", "right");
        msg_res.setAttribute("class", "left");

        let Message = document.getElementById('msg_area');

        Message.appendChild(msgCon1);
        Message.appendChild(msgCon2);

        msgCon1.appendChild(msg_req);
        msgCon2.appendChild(msg_res);

        document.getElementById('text').value = "";

        function scroll() {
            var scrollMsg = document.getElementById('msg_area');
            scrollMsg.scrollTop = scrollMsg.scrollHeight;
        }
        scroll();
    }
});