# Belly Button Biodiversity Dashboard

## Background

In this project, you will build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals the presence of various microbial species (operational taxonomic units, or OTUs) in human navels.

## Before You Begin

1. **Create a New Repository**: Create a new repository for this project called `belly-button-challenge`. Do not add this Challenge to an existing repository.

2. **Clone the Repository**: Clone the new repository to your computer.

3. **Copy Files**: Inside your local git repository, copy the files from the StarterCode folder contained within the Module 14 Challenge zip file.

4. **Push to GitHub**: Push the above changes to GitHub.

5. **Deploy to GitHub Pages**: Deploy the new repository to GitHub Pages.

## Instructions

Follow these steps to complete the project:

1. **Read in Data**: Use the D3 library to read in samples.json from the URL: [samples.json](samples.json).

2. **Create Bar Chart**: Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in each individual.
   - Use sample_values as the values for the bar chart.
   - Use otu_ids as the labels for the bar chart.
   - Use otu_labels as the hovertext for the chart.

3. **Create Bubble Chart**: Create a bubble chart that displays each sample.
   - Use otu_ids for the x values.
   - Use sample_values for the y values.
   - Use sample_values for the marker size.
   - Use otu_ids for the marker colors.
   - Use otu_labels for the text values.

4. **Display Metadata**: Display the sample's metadata, i.e., an individual's demographic information.
   - Loop through each key-value pair from the metadata JSON object and create a text string.
   - Append an html tag with that text to the #sample-metadata panel.

5. **Update Plots**: Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.

6. **Deploy App**: Deploy your app to a free static page hosting service, such as GitHub Pages.

References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/Links to an external site.

