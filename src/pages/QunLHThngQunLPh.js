import { useState, useCallback } from "react";
import ChiTitCngVicDefault from "../components/ChiTitCngVicDefault";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./QunLHThngQunLPh.module.css";

const QunLHThngQunLPh = () => {
  const [isChiTitCngVicDefaultOpen, setChiTitCngVicDefaultOpen] =
    useState(false);
  const [isChiTitCngVicDefault1Open, setChiTitCngVicDefault1Open] =
    useState(false);
  const [isChiTitCngVicDefault2Open, setChiTitCngVicDefault2Open] =
    useState(false);
  const [isChiTitCngVicDefault3Open, setChiTitCngVicDefault3Open] =
    useState(false);
  const [isChiTitCngVicDefault4Open, setChiTitCngVicDefault4Open] =
    useState(false);
  const [isChiTitCngVicDefault5Open, setChiTitCngVicDefault5Open] =
    useState(false);
  const navigate = useNavigate();

  const openChiTitCngVicDefault = useCallback(() => {
    setChiTitCngVicDefaultOpen(true);
  }, []);

  const closeChiTitCngVicDefault = useCallback(() => {
    setChiTitCngVicDefaultOpen(false);
  }, []);

  const openChiTitCngVicDefault1 = useCallback(() => {
    setChiTitCngVicDefault1Open(true);
  }, []);

  const closeChiTitCngVicDefault1 = useCallback(() => {
    setChiTitCngVicDefault1Open(false);
  }, []);

  const openChiTitCngVicDefault2 = useCallback(() => {
    setChiTitCngVicDefault2Open(true);
  }, []);

  const closeChiTitCngVicDefault2 = useCallback(() => {
    setChiTitCngVicDefault2Open(false);
  }, []);

  const openChiTitCngVicDefault3 = useCallback(() => {
    setChiTitCngVicDefault3Open(true);
  }, []);

  const closeChiTitCngVicDefault3 = useCallback(() => {
    setChiTitCngVicDefault3Open(false);
  }, []);

  const openChiTitCngVicDefault4 = useCallback(() => {
    setChiTitCngVicDefault4Open(true);
  }, []);

  const closeChiTitCngVicDefault4 = useCallback(() => {
    setChiTitCngVicDefault4Open(false);
  }, []);

  const openChiTitCngVicDefault5 = useCallback(() => {
    setChiTitCngVicDefault5Open(true);
  }, []);

  const closeChiTitCngVicDefault5 = useCallback(() => {
    setChiTitCngVicDefault5Open(false);
  }, []);

  const onIconButtonContainerClick = useCallback(() => {
    // Please sync "Dashboard / Nhân viên" to the project
  }, []);

  const onMennuContainer3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={styles.qunLHThngQunLPh}>
        <div className={styles.qunLHThngQunLPhInner}>
          <div className={styles.frameParent}>
            <div className={styles.headerParent}>
              <div className={styles.header}>
                <div className={styles.flow1Parent}>
                  <img className={styles.flow1Icon} alt="" src="/flow-1.svg" />
                  <div className={styles.avt}>
                    <div className={styles.userpic} />
                    <div className={styles.state} />
                    <div className={styles.label}>KA</div>
                  </div>
                  <div className={styles.overviewParent}>
                    <div className={styles.overview}>Phân quyền hệ thống</div>
                    <div className={styles.employees}>Mã đơn vị: 123355555</div>
                  </div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.memberParent}>
                    <div className={styles.member}>
                      <div className={styles.avt1}>
                        <div className={styles.userpic1} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>KA</div>
                      </div>
                      <div className={styles.avt2}>
                        <div className={styles.userpic2} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>NH</div>
                      </div>
                      <div className={styles.avt3}>
                        <div className={styles.userpic3} />
                        <div className={styles.state1} />
                        <div className={styles.label1}>HN</div>
                      </div>
                      <div className={styles.avt4}>
                        <img
                          className={styles.ovalCopy3}
                          alt=""
                          src="/oval-copy-3.svg"
                        />
                        <div className={styles.wrapper}>
                          <div className={styles.div}>+3</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.input}>
                      <div className={styles.usearchParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/usearch.svg"
                        />
                          <input
                             type="text"
                             placeholder="Search..."
                             value={this.state.searchQuery}
                              onChange={this.handleSearch}
                          />
                      </div>
                      <img
                        className={styles.uangleDownIcon}
                        alt=""
                        src="/uangledown.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.uplusWrapper}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uplus.svg"
                    />
                  </div>
                  <div className={styles.memberParent}>
                    <div className={styles.component2}>
                      <div className={styles.ucommentDotsWrapper}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/ucommentdots.svg"
                        />
                      </div>
                      <div className={styles.component2Child} />
                    </div>
                    <div className={styles.component2}>
                      <div className={styles.ucommentDotsWrapper}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/unotifiacation.svg"
                        />
                      </div>
                      <div className={styles.component2Child} />
                    </div>
                    <div className={styles.unsplashfgUd73uZmWrapper}>
                      <img
                        className={styles.unsplashfgUd73uZmIcon}
                        alt=""
                        src="/unsplashfg-ud73u-zm@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameContainer}>
                  <div className={styles.filterWrapper}>
                    <div className={styles.filter}>
                      <div className={styles.uplusParent}>
                        <img
                          className={styles.usearchIcon}
                          alt=""
                          src="/uplus1.svg"
                        />
                        <div className={styles.headerParent}>
                          <div className={styles.spXpTheo}>Sắp xếp theo</div>
                          <div className={styles.mcU}>Thêm vai trò</div>
                        </div>
                      </div>
                      <img
                        className={styles.uangleDownIcon}
                        alt=""
                        src="/uangledown.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.menucellParent}>
                <div className={styles.menucell}>
                  <div className={styles.tasknameParent}>
                    <div className={styles.taskname}>Phân quyền</div>
                    <img
                      className={styles.usortIcon}
                      alt=""
                      src="/uangledown.svg"
                    />
                  </div>
                  <img
                    className={styles.priorityIcon}
                    alt=""
                    src="/uangledown.svg"
                  />
                </div>
                <div className={styles.menucell1}>
                  <div className={styles.tasknameParent}>
                  <label>
                           <input
                             type="checkbox"
                             checked={isChecked}
                             onChange={handleCheckboxChange}
                           />
                       Quản lý
                  </label>   
                    <img
                      className={styles.usortIcon1}
                      alt=""
                      src="/uangledown.svg"
                    />
                  </div>
                  <img
                    className={styles.priorityIcon}
                    alt=""
                    src="/uangledown.svg"
                  />
                </div>
                <div className={styles.menucell1}>
                  <div className={styles.tasknameParent}>
                  <label>
                           <input
                             type="checkbox"
                             checked={isChecked}
                             onChange={handleCheckboxChange}
                           />
                       Thành viên
                  </label>   
                    <img
                      className={styles.usortIcon1}
                      alt=""
                      src="/uangledown.svg"
                    />
                  </div>
                  <img
                    className={styles.priorityIcon}
                    alt=""
                    src="/uangledown.svg"
                  />
                </div>
                <div className={styles.menucell3}>
                  <div className={styles.tasknameParent1}>
                  <label>
                           <input
                             type="checkbox"
                             checked={isChecked}
                             onChange={handleCheckboxChange}
                           />
                       Khách
                  </label>   
                    <img
                      className={styles.uangleDownIcon}
                      alt=""
                      src="/uangledown.svg"
                    />
                  </div>
                  <img
                    className={styles.priorityIcon}
                    alt=""
                    src="/uangledown.svg"
                  />
                </div>
              </div>
              <div className={styles.departmentOverview}>
                <div className={styles.headerGroup}>
                  <div className={styles.header1}>
                    <div className={styles.downParent}>
                      <img className={styles.downIcon} alt="" src="/down.svg" />
                      <div className={styles.textWrapper}>
                        <div className={styles.overview}>Nhóm quyền 1</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.listItem}>
                    <div className={styles.checkBox}>
                      <div className={styles.checkBoxChild} />
                      <img
                        className={styles.checkBoxItem}
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.listItem1}>
                    <div className={styles.checkBox}>
                      <div className={styles.checkBoxChild} />
                      <img
                        className={styles.checkBoxItem}
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.listItem1}>
                    <div className={styles.checkBox}>
                      <div className={styles.rectangleDiv} />
                    </div>
                  </div>
                </div>
                <div className={styles.departmentProjectWrapper}>
                  <div className={styles.departmentProject}>
                    <div className={styles.workList}>
                      <div
                        className={styles.listItem3}
                        onClick={openChiTitCngVicDefault}
                      >
                        <img
                          className={styles.uangleDownIcon}
                          alt=""
                          src="/uangledown.svg"
                        />
                        <div className={styles.frameContainer}>
                          <div className={styles.headerParent}>
                            <div className={styles.taskname}>
                              Tạo công việc mới
                            </div>
                            <div className={styles.taskname5}>
                              Quyền tạo công việc mới
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.checkBoxChild} />
                          <img
                            className={styles.checkBoxItem}
                            alt=""
                            src="/vector-5.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.checkBoxChild} />
                          <img
                            className={styles.checkBoxItem}
                            alt=""
                            src="/vector-5.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.rectangleDiv} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.workList}>
                      <div
                        className={styles.listItem3}
                        onClick={openChiTitCngVicDefault1}
                      >
                        <img
                          className={styles.uangleDownIcon}
                          alt=""
                          src="/uangledown.svg"
                        />
                        <div className={styles.frameContainer}>
                          <div className={styles.headerParent}>
                            <div className={styles.taskname}>
                              Tạo công việc mới
                            </div>
                            <div className={styles.taskname5}>
                              Quyền tạo công việc mới
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.checkBoxChild} />
                          <img
                            className={styles.checkBoxItem}
                            alt=""
                            src="/vector-5.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.checkBoxChild} />
                          <img
                            className={styles.checkBoxItem}
                            alt=""
                            src="/vector-5.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.rectangleDiv} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.workList2}>
                      <div
                        className={styles.listItem3}
                        onClick={openChiTitCngVicDefault2}
                      >
                        <img
                          className={styles.uangleDownIcon}
                          alt=""
                          src="/uangledown.svg"
                        />
                        <div className={styles.frameContainer}>
                          <div className={styles.headerParent}>
                            <div className={styles.taskname}>
                              Tạo công việc mới
                            </div>
                            <div className={styles.taskname5}>
                              Quyền tạo công việc mới
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.checkBoxChild} />
                          <img
                            className={styles.checkBoxItem}
                            alt=""
                            src="/vector-5.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.checkBoxChild} />
                          <img
                            className={styles.checkBoxItem}
                            alt=""
                            src="/vector-5.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.rectangleDiv} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.departmentOverview}>
                <div className={styles.headerGroup}>
                  <div className={styles.header1}>
                    <div className={styles.downParent}>
                      <img className={styles.downIcon} alt="" src="/down.svg" />
                      <div className={styles.textWrapper}>
                        <div className={styles.overview}>Nhóm quyền 2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.listItem}>
                    <div className={styles.checkBox}>
                      <div className={styles.checkBoxChild} />
                      <img
                        className={styles.checkBoxItem}
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.listItem1}>
                    <div className={styles.checkBox}>
                      <div className={styles.checkBoxChild} />
                      <img
                        className={styles.checkBoxItem}
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.listItem1}>
                    <div className={styles.checkBox}>
                      <div className={styles.rectangleDiv} />
                    </div>
                  </div>
                </div>
                <div className={styles.departmentProjectWrapper}>
                  <div className={styles.departmentProject}>
                    <div className={styles.workList}>
                      <div
                        className={styles.listItem3}
                        onClick={openChiTitCngVicDefault3}
                      >
                        <img
                          className={styles.uangleDownIcon}
                          alt=""
                          src="/uangledown.svg"
                        />
                        <div className={styles.frameContainer}>
                          <div className={styles.headerParent}>
                            <div className={styles.taskname}>
                              Tạo công việc mới
                            </div>
                            <div className={styles.taskname5}>
                              Quyền tạo công việc mới
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.checkBoxChild} />
                          <img
                            className={styles.checkBoxItem}
                            alt=""
                            src="/vector-5.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.checkBoxChild} />
                          <img
                            className={styles.checkBoxItem}
                            alt=""
                            src="/vector-5.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.rectangleDiv} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.workList}>
                      <div
                        className={styles.listItem3}
                        onClick={openChiTitCngVicDefault4}
                      >
                        <img
                          className={styles.uangleDownIcon}
                          alt=""
                          src="/uangledown.svg"
                        />
                        <div className={styles.frameContainer}>
                          <div className={styles.headerParent}>
                            <div className={styles.taskname}>
                              Tạo công việc mới
                            </div>
                            <div className={styles.taskname5}>
                              Quyền tạo công việc mới
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.checkBoxChild} />
                          <img
                            className={styles.checkBoxItem}
                            alt=""
                            src="/vector-5.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.checkBoxChild} />
                          <img
                            className={styles.checkBoxItem}
                            alt=""
                            src="/vector-5.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.rectangleDiv} />
                        </div>
                      </div>
                    </div>
                    <div className={styles.workList2}>
                      <div
                        className={styles.listItem3}
                        onClick={openChiTitCngVicDefault5}
                      >
                        <img
                          className={styles.uangleDownIcon}
                          alt=""
                          src="/uangledown.svg"
                        />
                        <div className={styles.frameContainer}>
                          <div className={styles.headerParent}>
                            <div className={styles.taskname}>
                              Tạo công việc mới
                            </div>
                            <div className={styles.taskname5}>
                              Quyền tạo công việc mới
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.checkBoxChild} />
                          <img
                            className={styles.checkBoxItem}
                            alt=""
                            src="/vector-5.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.checkBoxChild} />
                          <img
                            className={styles.checkBoxItem}
                            alt=""
                            src="/vector-5.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.listItem4}>
                        <div className={styles.checkBox}>
                          <div className={styles.rectangleDiv} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.departmentOverview2}>
                <div className={styles.headerGroup}>
                  <div className={styles.header1}>
                    <div className={styles.downParent}>
                      <img
                        className={styles.downIcon}
                        alt=""
                        src="/down1.svg"
                      />
                      <div className={styles.textWrapper}>
                        <div className={styles.overview}>Nhóm quyền 2</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.listItem}>
                    <div className={styles.checkBox}>
                      <div className={styles.checkBoxChild} />
                      <img
                        className={styles.checkBoxItem}
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.listItem1}>
                    <div className={styles.checkBox}>
                      <div className={styles.checkBoxChild} />
                      <img
                        className={styles.checkBoxItem}
                        alt=""
                        src="/vector-5.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.listItem1}>
                    <div className={styles.checkBox}>
                      <div className={styles.rectangleDiv} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <div className={styles.menuMini}>
            <div className={styles.frameParent1}>
              <div className={styles.uangleDoubleRightWrapper}>
                <img
                  className={styles.uangleDoubleRightIcon}
                  alt=""
                  src="/uangledoubleright.svg"
                />
              </div>
              <div className={styles.iconButtonParent}>
                <div
                  className={styles.iconButton}
                  onClick={onIconButtonContainerClick}
                >
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/uhomealt.svg"
                  />
                </div>
                <div className={styles.iconButton1}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/ulistul.svg"
                  />
                </div>
                <div className={styles.iconButton2}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/usuitcase.svg"
                  />
                </div>
                <div className={styles.iconButton2}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/ufilemedicalalt.svg"
                  />
                </div>
                <div className={styles.iconButton4}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/usitemap.svg"
                  />
                </div>
                <div className={styles.iconButton2}>
                  <img
                    className={styles.uhomeAltIcon}
                    alt=""
                    src="/uusersalt.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.uangleDoubleRightWrapper}>
              <img
                className={styles.uangleDoubleRightIcon}
                alt=""
                src="/usetting.svg"
              />
            </div>
          </div>
          <div className={styles.vectorParent}>
            <img className={styles.frameChild} alt="" src="/rectangle-1.svg" />
            <div className={styles.image1Parent}>
              <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
              <div className={styles.qunLHThngParent}>
                <div className={styles.overview}>Quản lý hệ thống</div>
                <div className={styles.mennuParent}>
                  <div className={styles.mennu}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/ucodebranch.svg"
                    />
                    <div className={styles.frameContainer}>
                      <div className={styles.hmNay}>Phòng ban</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                  <div className={styles.mennu}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uusersquare.svg"
                    />
                    <div className={styles.frameContainer}>
                      <div className={styles.hmNay}>Thành viên</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                  <div className={styles.mennu}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uusersalt1.svg"
                    />
                    <div className={styles.frameContainer}>
                      <div className={styles.hmNay}>Nhóm người dùng</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                  <div
                    className={styles.mennu3}
                    onClick={onMennuContainer3Click}
                  >
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/ushieldcheck.svg"
                    />
                    <div className={styles.frameContainer}>
                      <div className={styles.hmNay}>Phân quyền</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon}
                      alt=""
                      src="/uangleright1.svg"
                    />
                  </div>
                  <div className={styles.mennu}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uslidersv.svg"
                    />
                    <div className={styles.frameContainer}>
                      <div className={styles.hmNay}>Trường dữ liệu</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                  <div className={styles.mennu}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/mail.svg"
                    />
                    <div className={styles.frameContainer}>
                      <div className={styles.hmNay}>Thông báo Email</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                  <div className={styles.mennu}>
                    <img
                      className={styles.usearchIcon}
                      alt=""
                      src="/uimagev.svg"
                    />
                    <div className={styles.frameContainer}>
                      <div className={styles.hmNay}>Hình nền</div>
                    </div>
                    <img
                      className={styles.uangleRightIcon}
                      alt=""
                      src="/uangleright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isChiTitCngVicDefaultOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault1}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault1} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault2}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault2} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault3}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault3} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault4}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault4} />
        </PortalPopup>
      )}
      {isChiTitCngVicDefault5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChiTitCngVicDefault5}
        >
          <ChiTitCngVicDefault onClose={closeChiTitCngVicDefault5} />
        </PortalPopup>
      )}
    </>
  );
};

export default QunLHThngQunLPh;
