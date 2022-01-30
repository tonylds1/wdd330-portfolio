const links = [
    {
      label: "Week1 notes",
      url: "week01/index.html"
    },
    {
        label: "Week2 notes",
        url: "week02/index.html"
    },
    {
          label: "Week3 notes",
          url: "week03/index.html"
    },
    {
          label: "Week4 notes",
          url: "week04/index.html"
    }
  ]

  links.forEach(link => {
      var text = document.createTextNode(link.label);

      var a = document.createElement('a');
      console.log(a);
      a.setAttribute('href',link.url);
      a.setAttribute('text', link.label);
      a.append(text);

      var li = document.createElement("li");
      li.appendChild(a);

      document.getElementById("week-list").append(li);

  })
