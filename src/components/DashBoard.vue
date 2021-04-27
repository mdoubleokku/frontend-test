<template>
      <v-container
        class="py-8 px-6 bgColor"
        fluid
      >
      <v-row>
        <v-col
          cols="11"
        >
          <v-text-field
            hide-details
            solo
            label="Type in to search..."
            prepend-inner-icon="mdi-magnify"
          ></v-text-field>
        </v-col>
        <v-col cols="1">
          <v-container
        fluid
        class="pa-0 mt-1 mgleft"
      >
        <v-row>
          <v-col
            sm="4"
          >
            <v-btn
              icon
            >
              <v-icon>mdi-email-outline</v-icon>
            </v-btn>
          </v-col>

          <v-col
            sm="4"
          >
            <v-btn
              icon
            >
              <v-icon>mdi-bell-outline</v-icon>
            </v-btn>
          </v-col>

          <v-col
            sm="4"
          >
            <v-btn
              icon
            >
              <v-icon>mdi-apps</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="5"
        >
          <h1>Earnings Summary</h1>
        </v-col>
         <v-col
          cols="4"
        >
          <v-row>
            <v-col class="float-right">
          <v-select
          :items="earningType"
          v-model="selectedType"
          hide-details
          solo
        ></v-select></v-col>
         <v-col>
          <v-select
          :items="Year"
          v-model="selectedYear"
          hide-details
          solo
        ></v-select></v-col>
          </v-row>
        </v-col>
        <v-col cols="3" class="d-flex flex-row-reverse">
            <v-col cols="2">
              <v-btn
      class="mx-2"
      fab
      small
    >
      <v-icon dark>
        mdi-refresh
      </v-icon>
    </v-btn>
            </v-col>
        </v-col>
      </v-row>
      
        <v-row>
          <v-col
            cols="9"
          >
            <v-card>
               <div>
                <apexchart width="100%" height="350" type="line" :options="chartEarning" :series="earningSum"></apexchart>
              </div>
            </v-card>
          </v-col>
          <v-col
            cols="3"
          >
            <v-card
            class="d-flex align-center justify-center pa-4 mx-auto bgPurple text-color hightSize"
            >
            <div>
              <h2 class="text-center mt-4">Unpaid Earnings *</h2>
              <h1 class="text-center mt-6">$1,234.56</h1>
              <v-divider class="border-color mt-4"></v-divider>
                <p class="mt-4 fontDetails">*Update approximately every 10 minutes</p>
              <div class="text-center mt-6 mb-6">
                <v-btn
                rounded
                outlined
                class="text-color"
              >
              Withdraw Now
              </v-btn>
              </div>
              
            </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col
          cols="12"
          >
            <v-card>
              <v-row>
              <v-col cols="9">
                 <v-row>
                   <v-col cols="9" class="ml-3 d-flex"><h1>Published Files</h1></v-col>
                   <v-col cols="1">
                     <input id="fileUpload" type="file" hidden>
                <v-btn
                rounded
                outlined
                color="blue-grey"
                class="ma-2 white--text"
                @click="uploadfile()"
              >
                Upload
                <v-icon
                 right
                dark
                >
                mdi-upload
                </v-icon>
              </v-btn>
                   </v-col>
                 </v-row>
                 <v-row>
                   <v-col cols="12" class="mgl5">
                     <v-data-table
                  :headers="headers"
                  :items="publishedFile"
                  :items-per-page="5"
                  class="elevation-1"
                  >
                  <template v-slot:[`item.type`]="{ item }">
                    <span :class="getClassEarningLists(item.type)"></span>
                    {{ item.type }}
                  </template>
                  </v-data-table>
                   </v-col>
                 </v-row>
              </v-col>
              <v-divider vertical></v-divider>
              <v-col cols="3">
                <div class="mt20">
                  <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
                </div>
              </v-col>
              </v-row>
            </v-card>
          </v-col>
          
        </v-row>
      </v-container>
</template>

<script>
  export default {
    data: () => ({
      selectedType: 'All Type',
      selectedYear: 'This Year',
      earningType: ['All Type', 'Earning', 'DownLoad'],
      Year: ['2020','This Year'],
      earningSum: [{
              name: "Earning",
              data: [300, 700, 600, 1000, 1200, 800, 500, 1200, 400, 900, 200, 300]
            },
            {
              name: "Download",
              data: [250, 500, 300, 500, 700, 500, 900, 600, 300, 500, 700, 400]
            }
      ],
      chartEarning: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              },
              animations: {
                enabled: false
              }
            },
            markers: {
              size: 0,
              hover: {
                sizeOffset: 6
              }
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'
              ],
            },
            tooltip: {
              y: [
                {
                  title: {
                    formatter: function (val) {
                      return val
                    }
                  }
                },
                {
                  title: {
                    formatter: function (val) {
                      return val
                    }
                  }
                }
              ]
            },
            grid: {
              borderColor: '#f1f1f1',
            },
            fill: {
              colors: ['#2f2ee1', '#F4486E', '#FFB793']
            },
            colors: ['#2f2ee1', '#F4486E', '#FFB793']
          },
          series: [52,22,25],
          chartOptions: {
            chart: {
              type: 'donut',
              width: 500
            },
             plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      showAlways: true,
                      show: true
                    }
                  }
                }
              }
            },
          labels: ["Icon", "Photograph", "Illustration"],
          dataLabels: {
             enabled: false
            },
            fill: {
              colors: ['#2f2ee1', '#F4486E', '#FFB793']
            },
            colors: ['#2f2ee1', '#F4486E', '#FFB793'],
            legend: {
                position: 'bottom',
                horizontalAlign: 'center'
              },
          },
          headers: [
          { text: 'ITEM', value: 'type' },
          { text: 'TITLE', value: 'title' },
          { text: 'EARNINGS', value: 'earnings' },
          { text: 'DOWNLOAD', value: 'download' },
          { text: 'UPLOADED', value: 'uploaded' },
        ],
        publishedFile: [
          {
            type: 'Icon',
            title: 'Setting',
            earnings: '$12',
            download: 120,
            uploaded: '01/04/2021',
          },
           {
            type: 'Photograph',
            title: 'Mountain',
            earnings: '$20',
            download: 40,
            uploaded: '05/04/2021',
          },
           {
            type: 'Illustration',
            title: 'Conversation',
            earnings: '$30',
            download: 5,
            uploaded: '23/04/2021',
          },
          {
            type: 'Icon',
            title: 'Restaurant',
            earnings: '$34',
            download: 5,
            uploaded: '25/04/2021',
          },
          {
            type: 'Icon',
            title: 'Restaurant',
            earnings: '$34',
            download: 5,
            uploaded: '25/04/2021',
          }
        ], 
    }),
    methods: {
      uploadfile() {
        document.getElementById("fileUpload").click()
      },
      getClassEarningLists(type) {
        if (type === 'Icon') return 'apexcharts-legend-marker circle colorBlue'
        else if (type === 'Photograph') return 'apexcharts-legend-marker circle colorPink'
        else return 'apexcharts-legend-marker circle colorOrange'
      }
    }
  }
</script>


<style scoped>

.text-color {
  color: #FFF!important;
}

.border-color {
  border-color:#b7b7b7!important;
}

.bgPurple {
  background-color: #2f2ee1!important;
}

.bgColor {
  background: #F7F7FF;
}

.mgl5 {
  margin-left: 5px;
}

.mgleft {
  margin-left: -15px;
}

.fontDetails {
  font-size: 12px;
}

.hightSize {
  height: 365px;
}

.circle {
  height: 12px; 
  width: 12px; 
  left: 0px; 
  top: 0px; 
  border-width: 0px; 
  border-color: rgb(255, 255, 255); 
  border-radius: 12px;
}

.colorPink {
  background: #F4486E !important;
  color: #F4486E;
}

.colorBlue {
  background: #2f2ee1 !important;
  color: #2f2ee1;
}

.colorOrange {
  background: #FFB793 !important;
  color: #FFB793;
}

.mt20 {
  margin-top: 25%;
}

</style>
