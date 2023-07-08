function searchCandidates() {
    // Fetch search input values
    var location = document.getElementById("location").value;
    var jobRole = document.getElementById("jobRole").value;
  
    // Perform search based on location and job role (dummy data)
    var candidates = [
      { name: "John Doe", location: "New York", jobRole: "Software Engineer" },
      { name: "Jane Smith", location: "London", jobRole: "UX Designer" },
      { name: "Mark Johnson", location: "San Francisco", jobRole: "Data Analyst" },
    ];
  
    // Generate HTML to display candidate list
    var candidateListHTML = "<h3>Search Results</h3>";
    candidateListHTML += "<ul>";
    candidates.forEach(function(candidate) {
      candidateListHTML += "<li>Name: " + candidate.name + "</li>";
      candidateListHTML += "<li>Location: " + candidate.location + "</li>";
      candidateListHTML += "<li>Job Role: " + candidate.jobRole + "</li>";
      candidateListHTML += "<hr>";
    });
    candidateListHTML += "</ul>";
  
    // Display candidate list on the page
    var candidateListContainer = document.getElementById("candidateList");
    candidateListContainer.innerHTML = candidateListHTML;
  }
  
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  