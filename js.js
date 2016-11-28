//var searchPages = [];

$(document).ready(function() {

  function wikipediaSearch(x) {
    console.log(x);
    var searchPages = [];

    // $(function(){
    $('#searchTermOutput').empty();

    $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrsearch=' + x + '&callback=?', function(data) {
    console.log(Object.keys(data.query.pages));

      searchPages = Object.keys(data.query.pages);

      for (i=0;i<searchPages.length;i++) {

        $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=info&pageids=' + searchPages[i] + '&prop=extracts&exchars=20000&exsectionformat=plain&explaintext&callback=?', function(summaryData) {
          //$('summary').append(summaryData.query.pages.extract);
          var page = Object.keys(summaryData.query.pages);
          console.log(summaryData.query);
          $('#searchTermOutput').append("<div class='result'><p><a href='https://en.wikipedia.org/?curid=" + summaryData.query.pages[page].pageid + "&callback=?' target='_blank' id='resultLink'>" + summaryData.query.pages[page].title + "</a></p><p>" + summaryData.query.pages[page].extract.substring(0, 200) + "...</p>")
          // $('#title').append("<p>" + summaryData.query.pages[page].title + "</p>");
          // $('#summary').append(summaryData.query.pages[page].extract.substring(0, 200));
        });
        //console.log(Object.keys(data.query.pages));
        console.log(searchPages[i]);
    };
    });

    return searchPages;
    // });
  }; 

  $('#button').click(function() {
    console.log("Button Submitted", $('#buttonField').val());
    // $('#searchTermOutput').append($('#searchTermOutput'));
    wikipediaSearch($('#buttonField').val());
    $
  }); 
  // console.log(searchList);
  
});

//console.log(searchPages);
