/******************************
[rewrite_local]

^https?:\/\/accounts\.melon\.com\/myinfo\/setting_ageauth url script-response-body https://github.com/JaveleyQAQ/JaveleyQAQ/edit/main/images/demo.js

[mitm] 

hostname = accounts.melon.com

*******************************/

body = $response.body.replace(/<dd>(c.*?)<\/dd>/g, '1231231313')
$done({body});
