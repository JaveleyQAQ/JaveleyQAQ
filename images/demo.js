if ($request.url.indexOf('myinfo/setting_ageauth') != -1) {
    if($response.status != 200) {
        $notification.post("Emby Premiere 已激活", "", "");
        let body = $response.body;
        if (typeof body === 'string') {
            body = body.replace(/<dd>(c.*?)<\/dd>/g, '<dd>asdjaskldjkas</dd>');
        }
        $done({
            status: 200,
            headers: $response.headers,
            body: body
        });
    } else {
      
        $done({});
    }
} else {

    $done({});
}
