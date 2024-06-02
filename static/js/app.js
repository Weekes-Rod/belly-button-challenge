// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    var metadata = data.metadata;
    // Filter the metadata for the object with the desired sample number
    var selectedMetadata = metadata.filter(obj => obj.id == sample)[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var metadataPanel = d3.select("#sample-metadata");
    // Use `.html("") to clear any existing metadata
    metadataPanel.html("");
    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(selectedMetadata).forEach(([key, value]) => {
      metadataPanel.append("p").text(`${key}: ${value}`);
    });
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    var samples = data.samples;
    // Filter the samples for the object with the desired sample number
    var selectedSample = samples.filter(obj => obj.id == sample)[0];
    // Get the otu_ids, otu_labels, and sample_values
    var otuIds = selectedSample.otu_ids;
    var otuLabels = selectedSample.otu_labels;
    var sampleValues = selectedSample.sample_values;
    // Build a Bubble Chart
    var bubbleTrace = {
      x: otuIds,
      y: sampleValues,
      text: otuLabels,
      mode: "markers",
      marker: {
        size: sampleValues,
        color: otuIds,
        colorscale: "Earth"
      }
    };
    // Render the Bubble Chart
    var bubbleData = [bubbleTrace];
    var bubbleLayout = {
      title: "Bacteria Cultures Per Sample",
      xaxis: { title: "OTU ID" },
      yaxis: { title: "Sample Values" },
      showlegend: false
    };
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    var yticks = otuIds.slice(0, 10).map(id => `OTU ${id}`).reverse();
    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    var barTrace = {
      x: sampleValues.slice(0, 10).reverse(),
      y: yticks,
      text: otuLabels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    };
    // Render the Bar Chart
    var barData = [barTrace];
    var barLayout = {
      title: "Top 10 OTUs",
      xaxis: { title: "Sample Values" },
      yaxis: { title: "OTU ID" },
      showlegend: false
    };
    Plotly.newPlot("bar", barData, barLayout);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    var names = data.names;
    // Use d3 to select the dropdown with id of `#selDataset`
    var dropdown = d3.select("#selDataset");
    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    dropdown.selectAll("option")
    .data(names)
    .enter()
    .append("option")
    .text(function(d) { return d; })
    .attr("value", function(d) { return d; });
    // Get the first sample from the list
    var firstSample = names[0];
    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}
// Initialize the dashboard
init();