  // goPage( 跳转页数,每页展示数据条数)
  goPage(1, 2);

  // 分页
  function goPage(pno, psize) {
      var itable = document.getElementById("table_result"); //通过ID找到表格
      var num = itable.rows.length; //表格所有行数(所有记录数)
      var totalPage = 0; //总页数
      var pageSize = psize; //每页显示行数
      //总共分几页
      if (num / pageSize > parseInt(num / pageSize)) {
          totalPage = parseInt(num / pageSize) + 1;
      } else {
          totalPage = parseInt(num / pageSize);
      }
      var currentPage = pno; //当前页数
      var startRow = (currentPage - 1) * pageSize + 1; //开始显示的行  1
      var endRow = currentPage * pageSize; //结束显示的行   15
      endRow = (endRow > num) ? num : endRow;
      //遍历显示数据实现分页
      for (var i = 1; i < (num + 1); i++) {
          var irow = itable.rows[i - 1];
          if (i >= startRow && i <= endRow) {
              irow.style.display = "block";
          } else {
              irow.style.display = "none";
          }
      }
      var tempStr = "";

      if (currentPage > 1) {
          tempStr += "<span class='btn btn_head_end' href=\"#\" onClick=\"goPage(" + (1) + "," + psize +
              ")\">首页</span>";
          tempStr += "<span class='btn btn_up_down' href=\"#\" onClick=\"goPage(" + (currentPage - 1) + "," + psize +
              ")\">上一页</span>"
      } else {
          tempStr += "<span class='btn btn_head_end ban'>首页</span>";
          tempStr += "<span class='btn btn_up_down ban'>上一页</span>";
      }

      if (totalPage <= 11) {
          // 页数少于9页时
          for (var pageIndex = 1; pageIndex <= totalPage; pageIndex++) {
              if (pageIndex == pno) {
                  tempStr += "<span class='btn btn1' onclick=\"goPage(" + pageIndex + "," + psize + ")\"><span>" +
                      pageIndex +
                      "</span></span>";
              } else {
                  tempStr += "<span class='btn' onclick=\"goPage(" + pageIndex + "," + psize + ")\"><span>" +
                      pageIndex +
                      "</span></span>";
              }
          }
      } else {
          // 页数超过9页时
          if (pno <= 5) {
              for (var pageIndex = 1; pageIndex <= 8; pageIndex++) {
                  if (pageIndex == pno) {
                      tempStr += "<span class='btn btn1' onclick=\"goPage(" + pageIndex + "," + psize + ")\"><span>" +
                          pageIndex +
                          "</span></span>";
                  } else {
                      tempStr += "<span class='btn' onclick=\"goPage(" + pageIndex + "," + psize + ")\"><span>" +
                          pageIndex +
                          "</span></span>";
                  }
              }
              // 隐藏的页数
              tempStr += "<span class='btn'><span>···</span></span>";
              for (var pageIndex = totalPage - 1; pageIndex <= totalPage; pageIndex++) {
                  tempStr += "<span class='btn' onclick=\"goPage(" + pageIndex + "," + psize + ")\"><span>" +
                      pageIndex +
                      "</span></span>";
              }
          } else if (pno >= totalPage - 4) {
              for (var pageIndex = 1; pageIndex <= 2; pageIndex++) {
                  tempStr += "<span class='btn' onclick=\"goPage(" + pageIndex + "," + psize + ")\"><span>" +
                      pageIndex +
                      "</span></span>";
              }
              // 隐藏的页数
              tempStr += "<span class='btn'><span>···</span></span>";
              for (var pageIndex = totalPage - 7; pageIndex <= totalPage; pageIndex++) {
                  if (pageIndex == pno) {
                      tempStr += "<span class='btn btn1' onclick=\"goPage(" + pageIndex + "," + psize + ")\"><span>" +
                          pageIndex +
                          "</span></span>";
                  } else {
                      tempStr += "<span class='btn' onclick=\"goPage(" + pageIndex + "," + psize + ")\"><span>" +
                          pageIndex +
                          "</span></span>";
                  }
              }

          } else {
              if (pno < 7) {
                  for (var pageIndex = 1; pageIndex <= pno + 2; pageIndex++) {
                      if (pageIndex == pno) {
                          // 当前页
                          tempStr += "<span class='btn btn1' onclick=\"goPage(" + pageIndex + "," + psize +
                              ")\"><span>" +
                              pageIndex +
                              "</span></span>";
                      } else {
                          tempStr += "<span class='btn' onclick=\"goPage(" + pageIndex + "," + psize + ")\"><span>" +
                              pageIndex +
                              "</span></span>";
                      }
                  }
                  // 隐藏的页数
                  tempStr += "<span class='btn'><span>···</span></span>";
                  for (var pageIndex = totalPage - 1; pageIndex <= totalPage; pageIndex++) {
                      tempStr += "<span class='btn' onclick=\"goPage(" + pageIndex + "," + psize + ")\"><span>" +
                          pageIndex +
                          "</span></span>";
                  }
              } else if (
                  pno > totalPage - 6
              ) {
                  for (var pageIndex = 1; pageIndex <= 2; pageIndex++) {
                      tempStr += "<span class='btn' onclick=\"goPage(" + pageIndex + "," + psize + ")\"><span>" +
                          pageIndex +
                          "</span></span>";
                  }
                  // 隐藏的页数
                  tempStr += "<span class='btn'><span>···</span></span>";
                  for (var pageIndex = pno - 2; pageIndex <= totalPage; pageIndex++) {
                      if (pageIndex == pno) {
                          // 当前页
                          tempStr += "<span class='btn btn1' onclick=\"goPage(" + pageIndex + "," + psize +
                              ")\"><span>" +
                              pageIndex +
                              "</span></span>";
                      } else {
                          tempStr += "<span class='btn' onclick=\"goPage(" + pageIndex + "," + psize + ")\"><span>" +
                              pageIndex +
                              "</span></span>";
                      }
                  }
              } else {
                  for (var pageIndex = 1; pageIndex <= 2; pageIndex++) {
                      tempStr += "<span class='btn' onclick=\"goPage(" + pageIndex + "," + psize + ")\"><span>" +
                          pageIndex +
                          "</span></span>";
                  }
                  // 隐藏的页数
                  tempStr += "<span class='btn'><span>···</span></span>";
                  //当前页两侧
                  for (var pageIndex = pno - 2; pageIndex <= pno + 2; pageIndex++) {
                      if (pageIndex == pno) {
                          // 当前页
                          tempStr += "<span class='btn btn1' onclick=\"goPage(" + pageIndex + "," + psize +
                              ")\"><span>" +
                              pageIndex +
                              "</span></span>";
                      } else {
                          tempStr += "<span class='btn' onclick=\"goPage(" + pageIndex + "," + psize + ")\"><span>" +
                              pageIndex +
                              "</span></span>";
                      }
                  }
                  // 隐藏的页数
                  tempStr += "<span class='btn'><span>···</span></span>";
                  for (var pageIndex = totalPage - 1; pageIndex <= totalPage; pageIndex++) {
                      tempStr += "<span class='btn' onclick=\"goPage(" + pageIndex + "," + psize + ")\"><span>" +
                          pageIndex +
                          "</span></span>";
                  }
              }
          }
      }

      if (currentPage < totalPage) {
          tempStr += "<span class='btn btn_up_down' href=\"#\" onClick=\"goPage(" + (currentPage + 1) + "," + psize +
              ")\">下一页</span>";
          tempStr += "<span class='btn btn_head_end' href=\"#\" onClick=\"goPage(" + (totalPage) + "," + psize +
              ")\">尾页</span>";
      } else {
          tempStr += "<span class='btn btn_up_down ban'>下一页</span>";
          tempStr += "<span class='btn btn_head_end ban'>尾页</span>";
      }
      tempStr +=
          "<span class='btn'><input id='skip_input' class='skip_input'></span><span class='btn btn_head_end'  onClick=\"skipInput(" +
          (totalPage) + "," +
          psize +
          ")\">跳转</span>"
      console.log(currentPage, pno, psize);
      document.getElementById("barcon").innerHTML = tempStr;
      document.getElementById("skip_input").value = pno
  }

  // 搜索框跳转按钮事件
  function skipInput(totalPage, psize) {
      var input = document.getElementById("skip_input")
      var val = input.value.trim()
      if (!val) return
      if (val > totalPage) {
          val = totalPage
      }
      goPage(+val, psize)
  }