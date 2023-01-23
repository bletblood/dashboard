// template =
  // {
  //   name: "",
  //   path: "",
  //   parent: "",
  //   type: "",
  //   fetching: [
  //     {
  //       title: "",
  //       table: "",
  //       condition: "",
  //       regionsTable: "",
  //       regionsTableCondition: "",
  //       common: "",
  //       commonCondition: "",
  //       wiki: "",
  //       chartOptions: {
  //         xAxisColumn: "",
  //         charts: [
  //            {
  //              column: "",
  //              title: "",
  //              type: "",
  //              color: "",
  //              display: "",
  //              stackId: "",
  //              labelDisplay: "",
  //              labelPosition: "",
  //              strokeDashArray: "",
  //            },
  //          ]
  //        }
  //     }
  //   ],
  // },

export const LinkPages = [
  {
    name: "RRL",
    path: "/rrl",
    parent: "/dashboard",
    homeType: 'multiple',
    type: "line",
    fetching: [
      {
        title: "2023 по плану",
        table: "fn_2023_RRL_Plan_Plan_Forecast()",
        condition: "",
        regionsTable: "fn_2023_RRL_Plan_Plan_Forecast_By_RO",
        regionsTableCondition: "",
        common: "vw_RRL_Common",
        commonCondition: "YEAR(TRY_CONVERT(DATE, [Планируемая дата окончания], 104)) = '2023'",
        wiki: '1004122899',
        chartOptions: {
          xAxisColumn: 'month',
          charts: [
              {
                  column: 'Done',
                  title: 'Выполнено',
                  type: 'bar',
                  color: 'rgba(0, 185, 86, .8)'
              },
              {
                  column: 'Ready for deploy',
                  title: 'Стройготовность',
                  type: 'bar',
                  color: 'rgba(180, 180, 20, .8)'
              },
              {
                  column: 'Issued',
                  title: 'Выдано',
                  type: 'bar',
                  color: 'rgba(91, 217, 229, .8)',
                  stackId: 'id_1'
              },
              {
                  column: 'Obesp',
                  title: 'Обеспечено',
                  type: 'bar',
                  color: 'rgba(68, 65, 137, .8)',
                  stackId: 'id_1'
              },
              {
                  column: 'PUR_SIGN',
                  title: '45* подписан',
                  type: 'bar',
                  color: 'rgba(255, 167, 23, .8)',
                  stackId: 'id_1'
              },
              {
                  column: 'PUR_NOT_SIGN',
                  title: '45* не подписан',
                  type: 'bar',
                  color: 'rgba(235, 90, 64, .8)',
                  stackId: 'id_1'
              },
              {
                  column: 'Ready but not Done',
                  title: 'Готово но не выполнено',
                  type: 'line',
                  labelDisplay: 'none',
                  display: 'none'
              },
              {
                  column: 'Plan',
                  title: 'План',
                  type: 'line',
                  color: 'rgba(155, 25, 130, .8)'
              },
          ]
        },
      },
      {
        title: "2022 по плану",
        table: "fn_2022_RRL_Plan_Plan_Forecast()",
        condition: "",
        regionsTable: "fn_2022_RRL_Plan_Plan_Forecast_By_RO",
        regionsTableCondition: "",
        common: "vw_RRL_Common",
        commonCondition: "YEAR(TRY_CONVERT(DATE, [Планируемая дата окончания], 104)) = '2022'",
        wiki: '1004122899',
        chartOptions: {
          xAxisColumn: 'month',
          charts: [
              {
                  column: 'Done',
                  title: 'Выполнено',
                  type: 'bar',
                  color: 'rgba(0, 185, 86, .8)'
              },
              {
                  column: 'Ready for deploy',
                  title: 'Стройготовность',
                  type: 'bar',
                  color: 'rgba(180, 180, 20, .8)'
              },
              {
                  column: 'Issued',
                  title: 'Выдано',
                  type: 'bar',
                  color: 'rgba(91, 217, 229, .8)',
                  stackId: 'id_1'
              },
              {
                  column: 'Obesp',
                  title: 'Обеспечено',
                  type: 'bar',
                  color: 'rgba(68, 65, 137, .8)',
                  stackId: 'id_1'
              },
              {
                  column: 'PUR_SIGN',
                  title: '45* подписан',
                  type: 'bar',
                  color: 'rgba(255, 167, 23, .8)',
                  stackId: 'id_1'
              },
              {
                  column: 'PUR_NOT_SIGN',
                  title: '45* не подписан',
                  type: 'bar',
                  color: 'rgba(235, 90, 64, .8)',
                  stackId: 'id_1'
              },
              {
                  column: 'Ready but not Done',
                  title: 'Готово но не выполнено',
                  type: 'line',
                  labelDisplay: 'none',
                  display: 'none'
              },
              {
                  column: 'Plan',
                  title: 'План',
                  type: 'line',
                  color: 'rgba(155, 25, 130, .8)'
              },
          ]
        },
      },
      {
        title: "2022 по плану (КТ)",
        table: "fn_RRL_CP_Plan(2022)",
        condition: "",
        regionsTable: "fn_RRL_CP_Plan_Single_Regions",
        regionsTableCondition: "",
        common: "vw_RRL_Common",
        commonCondition: "YEAR(TRY_CONVERT(DATE, [Планируемая дата окончания], 104)) = '2022'",
        wiki: '1004129770',
      },
      {
        title: "2022 вне плана (КТ)",
        table: "fn_RRL_CP_Out_Of_Plan(2022)",
        condition: "",
        regionsTable: "fn_RRL_CP_Out_Of_Plan_Single_Regions",
        regionsTableCondition: "",
        common: "vw_RRL_Common",
        commonCondition: "YEAR(TRY_CONVERT(DATE, [Планируемая дата окончания], 104)) = '2022'",
        wiki: '1004129912',
      },
      {
        title: "2022 всего",
        table: "fn_2022_RRL_Plan()",
        condition: "",
        regionsTable: "fn_2022_RRL_Plan_Single_Regions",
        regionsTableCondition: "",
        common: "vw_RRL_Common",
        commonCondition: "YEAR(TRY_CONVERT(DATE, [Планируемая дата окончания], 104)) = '2022'",
        wiki: '1004122899',
        chartOptions: {
          xAxisColumn: 'month',
          charts: [
            {
              column: 'Ready for deploy',
              title: 'Стройготовность',
              type: 'bar',
              color: 'rgba(255, 167, 23, .8)',
            },
            {
              column: 'Done',
              title: 'Выполнено',
              type: 'bar',
              color: 'rgba(0, 185, 86, .8)',
            },
            {
              column: 'Ready but not Done',
              title: 'Готово но не выполнено',
              type: 'line',
              color: 'rgba(235, 90, 64, .8)',
              display: 'none'
            },
            {
              column: 'Issued',
              title: 'Выдано',
              type: 'bar',
              color: 'rgba(68, 65, 137, .8)',
              stackId: 'id_1'
            },
            {
              column: 'Plan',
              title: 'План',
              type: 'line',
              color: 'rgba(155, 25, 130, .8)',
            },
            {
              column: 'Forecast',
              title: 'Прогноз',
              type: 'broken-line',
              color: '#9898a2'
            },
          ]
        },
      },
      {
        title: "2022 всего (КТ)",
        table: "fn_RRL_CP(2022)",
        condition: "",
        regionsTable: "fn_RRL_CP_Single_Regions",
        regionsTableCondition: "",
        common: "vw_RRL_Common",
        commonCondition: "YEAR(TRY_CONVERT(DATE, [Планируемая дата окончания], 104)) = '2022'",
        wiki: '1004129956',
      },
      {
        title: "2022 строительство БС",
        table: "fn_RRL_Build_BS()",
        condition: "",
        regionsTable: "fn_RRL_Build_BS_Single_Regions",
        regionsTableCondition: "",
        common: "vw_RRL_Build_BS_Common",
        commonCondition: "",
        wiki: '978603889',
        chartOptions: {
          xAxisColumn: 'month',
          charts: [
            {
              column: 'Ready for deploy',
              title: 'Стройготовность',
              type: 'bar',
              color: 'rgba(255, 167, 23, .8)',
            },
            {
              column: 'Done',
              title: 'Выполнено',
              type: 'bar',
              color: 'rgba(0, 185, 86, .8)',
            },
            {
              column: 'Ready but not Done',
              title: 'Готово но не выполнено',
              type: 'line',
              color: 'rgba(235, 90, 64, .8)',
              display: 'none'
            },
            {
              column: 'Issued',
              title: 'Выдано',
              type: 'bar',
              color: 'rgba(68, 65, 137, .8)',
              stackId: 'id_1'
            },
            {
              column: 'Plan',
              title: 'План',
              type: 'line',
              color: 'rgba(155, 25, 130, .8)',
            },
            {
              column: 'Forecast',
              title: 'Прогноз',
              type: 'broken-line',
              color: '#9898a2'
            },
          ]
        },
      },
      {
        title: "2021 по плану",
        table: "t_z_2021_12_31_RRL_Plan_Plan_Forecast",
        condition: "",
        regionsTable: "",
        regionsTableCondition: "",
        common: "t_z_2021_12_31_RRL_Common",
        commonCondition: "",
        wiki: '978602712',
        chartOptions: {
          xAxisColumn: 'month',
          charts: [
            {
              column: 'Ready for deploy',
              title: 'Стройготовность',
              type: 'bar',
              color: 'rgba(255, 167, 23, .8)',
            },
            {
              column: 'Done',
              title: 'Выполнено',
              type: 'bar',
              color: 'rgba(0, 185, 86, .8)',
            },
            {
              column: 'Ready but not Done',
              title: 'Готово но не выполнено',
              type: 'line',
              color: 'rgba(235, 90, 64, .8)',
              display: 'none'
            },
            {
              column: 'Issued',
              title: 'Выдано',
              type: 'bar',
              color: 'rgba(68, 65, 137, .8)',
              stackId: 'id_1'
            },
            {
              column: 'Plan',
              title: 'План',
              type: 'line',
              color: 'rgba(155, 25, 130, .8)',
            },
            {
              column: 'Forecast',
              title: 'Прогноз',
              type: 'broken-line',
              color: '#9898a2'
            },
          ]
        },
      },
      {
        title: "2021 по плану (КТ)",
        table: "fn_RRL_CP_Plan(2021)",
        condition: "",
        regionsTable: "fn_RRL_CP_Single_Regions",
        regionsTableCondition: "",
        common: "vw_RRL_Common",
        commonCondition: "YEAR(TRY_CONVERT(DATE, [Планируемая дата окончания], 104)) = '2021'",
        wiki: '1004129956',
      },
      {
        title: "2021 вне плана (КТ)",
        table: "fn_RRL_CP_Out_Of_Plan(2021)",
        condition: "",
        regionsTable: "fn_RRL_CP_Single_Regions",
        regionsTableCondition: "",
        common: "vw_RRL_Common",
        commonCondition: "YEAR(TRY_CONVERT(DATE, [Планируемая дата окончания], 104)) = '2021'",
        wiki: '1004129956',
      },
      {
        title: "2021 всего (КТ)",
        table: "fn_RRL_CP(2021)",
        condition: "",
        regionsTable: "fn_RRL_CP_Single_Regions",
        regionsTableCondition: "",
        common: "vw_RRL_Common",
        commonCondition: "YEAR(TRY_CONVERT(DATE, [Планируемая дата окончания], 104)) = '2021'",
        wiki: '1004129956',
      },
      {
        title: "2021 строительство БС",
        table: "t_z_2021_12_31_RRL_Build_BS",
        condition: "",
        regionsTable: "",
        regionsTableCondition: "",
        common: "t_z_2021_12_31_RRL_Build_BS_Common",
        commonCondition: "",
        wiki: '978603889',
        chartOptions: {
          xAxisColumn: 'month',
          charts: [
            {
              column: 'Plan',
              title: 'План',
              type: 'line',
              color: 'rgba(155, 25, 130, .8)'
            },
            {
              column: 'Prognoz',
              title: 'Прогноз',
              type: 'broken-line',
              color: '#9898a2'
            },
            {
              column: 'Built',
              title: 'Построено',
              type: 'bar',
              color: 'rgba(0, 185, 86, .8)'
            },
            {
              column: 'Issued',
              title: 'Выдано',
              type: 'bar',
              color: 'rgba(91, 217, 229, .8)',
              stackId: 'id_1'
            },
            {
              column: 'Obesp',
              title: 'Обеспечено',
              type: 'bar',
              color: 'rgba(68, 65, 137, .8)',
              stackId: 'id_1'
            },
            {
              column: 'PUR_SIGN',
              title: '45* подписан',
              type: 'bar',
              color: 'rgba(255, 167, 23, .8)',
              stackId: 'id_1'
            },
            {
              column: 'PUR_NOT_SIGN',
              title: '45* не подписан',
              type: 'bar',
              color: 'rgba(235, 90, 64, .8)',
              stackId: 'id_1'
            },
          ]
        },
      },
      {
        title: "2020 по плану",
        table: "fn_RRL_Plan_Plan_Forecast(2020)",
        condition: "",
        regionsTable: "",
        regionsTableCondition: "",
        common: "vw_RRL_Common",
        commonCondition: "YEAR(TRY_CONVERT(date, [Планируемая дата окончания], 104)) = 2020",
        wiki: '978602712',
        chartOptions: {
          xAxisColumn: 'month',
          charts: [
            {
              column: 'Plan',
              title: 'План',
              type: 'line',
              color: 'rgba(155, 25, 130, .8)'
            },
            {
              column: 'Forecast',
              title: 'Прогноз',
              type: 'broken-line',
              color: '#9898a2'
            },
            {
              column: 'Ready for deploy',
              title: 'Стройготовность',
              type: 'bar',
              color: 'rgba(255, 167, 23, .8)'
            },
            {
              column: 'Done',
              title: 'Выполнено',
              type: 'bar',
              color: 'rgba(0, 185, 86, .8)'
            },
            {
              column: 'Ready but not Done',
              title: 'Ready but not Done',
              type: 'line',
              color: 'rgba(235, 90, 64, .8)',
              display: 'none'
            },
          ]
        },
      },
      {
        title: "2020 по плану (КТ)",
        table: "fn_RRL_CP_Plan(2020)",
        condition: "",
        regionsTable: "fn_RRL_CP_Single_Regions",
        regionsTableCondition: "",
        common: "vw_RRL_Common",
        commonCondition: "YEAR(TRY_CONVERT(DATE, [Планируемая дата окончания], 104)) = '2021'",
        wiki: '1004129956',
      },
      {
        title: "2020 вне плана (КТ)",
        table: "fn_RRL_CP_Out_Of_Plan(2020)",
        condition: "",
        regionsTable: "fn_RRL_CP_Single_Regions",
        regionsTableCondition: "",
        common: "vw_RRL_Common",
        commonCondition: "YEAR(TRY_CONVERT(DATE, [Планируемая дата окончания], 104)) = '2021'",
        wiki: '1004129956',
      },
      {
        title: "2020 всего (КТ)",
        table: "fn_RRL_CP(2020)",
        condition: "",
        regionsTable: "fn_RRL_CP_Single_Regions",
        regionsTableCondition: "",
        common: "vw_RRL_Common",
        commonCondition: "YEAR(TRY_CONVERT(DATE, [Планируемая дата окончания], 104)) = '2021'",
        wiki: '1004129956',
      },
      {
        title: "2019 по плану",
        table: "fn_RRL_Plan(2019)",
        condition: "",
        regionsTable: "",
        regionsTableCondition: "",
        common: "vw_RRL_Common",
        commonCondition: "YEAR(TRY_CONVERT(date, [Планируемая дата окончания], 104)) = 2019",
        wiki: '978603337',
        chartOptions: {
          xAxisColumn: 'month',
          charts: [
            {
              column: 'Plan',
              title: 'План',
              type: 'line',
              color: 'rgba(155, 25, 130, .8)'
            },
            {
              column: 'Forecast',
              title: 'Прогноз',
              type: 'broken-line',
              color: '#9898a2'
            },
            {
              column: 'Ready for deploy',
              title: 'Стройготовность',
              type: 'bar',
              color: 'rgba(255, 167, 23, .8)'
            },
            {
              column: 'Done',
              title: 'Выполнено',
              type: 'bar',
              color: 'rgba(0, 185, 86, .8)'
            },
            {
              column: 'Ready but not Done',
              title: 'Ready but not Done',
              type: 'line',
              color: 'rgba(235, 90, 64, .8)',
              display: 'none'
            },
          ]
        },
      },
      {
        title: "2018 по плану",
        table: "fn_RRL_Plan(2018)",
        condition: "",
        regionsTable: "",
        regionsTableCondition: "",
        common: "vw_RRL_Common",
        commonCondition: "YEAR(TRY_CONVERT(date, [Планируемая дата окончания], 104)) = 2018",
        wiki: '978603337',
        chartOptions: {
          xAxisColumn: 'month',
          charts: [
            {
              column: 'Plan',
              title: 'План',
              type: 'line',
              color: 'rgba(155, 25, 130, .8)'
            },
            {
              column: 'Forecast',
              title: 'Прогноз',
              type: 'broken-line',
              color: '#9898a2'
            },
            {
              column: 'Ready for deploy',
              title: 'Стройготовность',
              type: 'bar',
              color: 'rgba(255, 167, 23, .8)'
            },
            {
              column: 'Done',
              title: 'Выполнено',
              type: 'bar',
              color: 'rgba(0, 185, 86, .8)'
            },
            {
              column: 'Ready but not Done',
              title: 'Ready but not Done',
              type: 'line',
              color: 'rgba(235, 90, 64, .8)',
              display: 'none'
            },
          ]
        },
      },
    ],
  },
  {
    name: "IPBH",
    path: "/ipbh",
    parent: "/dashboard",
    homeType: 'multiple',
    type: "line",
    fetching: [
      {
        title: "",
        table: "",
        condition: "",
        regionsTable: "",
        regionsTableCondition: "",
        common: "",
        commonCondition: "",
        wiki: "",
        chartOptions: [
          {},
        ]
      }
    ],
  },
  {
    name: "VOLS",
    path: "/vols",
    parent: "/dashboard",
    homeType: 'multiple',
    type: "line",
    fetching: [
      {
        title: "Строительство горВОЛС 2022",
        table: "fn_2022_FOCL_Plan_Build_City_211_dev()",
        condition: "",
        regionsTable: "",
        regionsTableCondition: "",
        common: "vw_2022_FOCL_Common_Build_City_211",
        commonCondition: "",
        wiki: "",
        chartOptions: {
          xAxisColumn: "month",
          charts: [
              {
                  column: "Plan",
                  title: "Опер. план",
                  type: "line",
                  color: "rgba(68, 65, 137, .8)",
                  
              },
              {
                  column: "AdvancedPlan",
                  title: "Расширенный план",
                  type: "line",
                  color: "rgba(155, 25, 130, .8)",
              },
              {
                  column: "Done",
                  title: "Выполнено",
                  type: "bar",
                  color: "rgba(0, 185, 86, .8)",
              },
              {
                  column: "TargetPlan",
                  title: "Целевой план",
                  type: "line",
                  color: "rgba(235, 90, 64, .8)",
              },
          ]
        }
      },

    ],
  },
  {
    name: "RTS",
    path: "/rts",
    parent: "/dashboard",
    homeType: 'single',
    type: "line",
    fetching: [
      {
        title: "",
        table: "",
        condition: "",
        regionsTable: "",
        regionsTableCondition: "",
        common: "",
        commonCondition: "",
        wiki: "",
        chartOptions: [
          {},
        ]
      }
    ],
  },
  {
    name: "ESRP",
    path: "/esrp",
    parent: "/msv",
    homeType: 'single',
    type: "bar",
    fetching: [
      {
        title: "",
        table: "",
        condition: "",
        regionsTable: "",
        regionsTableCondition: "",
        common: "",
        commonCondition: "",
        wiki: "",
        chartOptions: [
          {},
        ]
      }
    ],
  },
  {
    name: "TWAMP",
    path: "/twamp",
    parent: "/twamp",
    homeType: 'single',
    type: "line",
    fetching: [
      {
        title: "",
        table: "",
        condition: "",
        regionsTable: "",
        regionsTableCondition: "",
        common: "",
        commonCondition: "",
        wiki: "",
        chartOptions: [
          {},
        ]
      }
    ],
  },
]