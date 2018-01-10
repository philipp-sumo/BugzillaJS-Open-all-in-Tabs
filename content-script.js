debugger;

var openAll = function(e) {
	e.preventDefault();

	var all = $('.bz_id_column a');
	var msg = 'You\'re trying to open ' + all.length + ' tabs. ';
	msg += 'Are you sure you want to do this?';
	if (all.length < 10 || confirm(msg)) {
		$($('.bz_id_column a').get().reverse()).each(function() {
			if ($(this).attr('href')) {
				window.open($(this).attr('href'), '_blank');
			}
		});
	}
};

var a = $('<a>', {'href': '#',
	'click': openAll,
	'text': 'Open All in Tabs'}),
	td = $('<td>');

$('table[class="bz_buglist sortable"]').before(td);
td.append(a);