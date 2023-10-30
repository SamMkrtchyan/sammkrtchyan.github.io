function init() {
	$.post('inc/core.php',
		{
			"action":"posts"
		},
		getPost
	)
}
function getPost(data) {
	data = JSON.parse(data);
	for (var id in data) {
		$('#newses').append("<div class='col-lg-4 col-md-4 col-sm-6 col-xs-12 '><div class='news-content'><div class='news-img'><img width='100%' src='img/"
								+
									data[id]['img']
								+"'></div>"+
								"<div class='news-text'>"
									+
										"<div class='news-title'><h5>"
											+
												data[id]['title']
											+
										"</h5></div>"
										+
										"<div class='news-descr'>"
											+
												data[id]['descr']
											+
										"</div>"
									+
								"</div></div></div>"
								)
	}
}
function getCategory() {
	$.post('inc/core.php', 
		{
			"action":"category"
		},
		function (data) {
			data = JSON.parse(data);
			for (var id in data) {
				$(".side-ul").append("<li><a href='#'>"
						+
						data[id]['category']
						+
						"</a></li>");
			}
		}
	)
}
function getSponser() {
	$.post('inc/core.php', 
		{
			"action":"sponser"
		},
		function (data) {
			data = JSON.parse(data);
			$('.sp-title').append(data['1']['title']);
			$('.s-img').append("<img style='float:left;' width='200px' src='img/"+data['1']['img']+"' alt=''/>")
			$('.s-descr').append(data['1']['descr']);
		}
	)
}