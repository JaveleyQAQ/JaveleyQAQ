/*
QuantumultX:
[rewrite_local]
^https?:\/\/accounts\.melon\.com\/myinfo\/setting_ageauth url script-response-body https://raw.githubusercontent.com/JaveleyQAQ/JaveleyQAQ/refs/heads/main/images/demo.js

[mitm]
hostname = *account.wps.cn, *accounts.melon.com

**************************/

var body = JSON.parse($response.body);

body = $response.body.replace('c', '1231231313')
$done({body});
