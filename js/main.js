const links = [
    {
      label: "Week1 notes",
      url: "week01/index.html"
    },
    {
        label: "Week2 notes",
        url: "week02/index.html"
      }
  ]

  links.forEach(link => {
      var text = document.createTextNode(link.label);

      var a = document.createElement('a');
      $(a).attr('href',link.url).attr('text', link.label);
      $(a).append(text);

      var li = document.createElement("li");
      li.appendChild(a);

      $("#week-list").append(li);

  })
