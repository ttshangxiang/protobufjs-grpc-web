/* eslint-disable */
/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.setOptions({
  java_multiple_files: true,
  java_package: "com.szwdcloud.proto",
  java_outer_classname: "CommonProto"
})
.addJSON({
  basicmanagement: {
    options: {
      java_multiple_files: true,
      java_package: "com.szwdcloud.basicmanagement.proto.basicmanagement",
      java_outer_classname: "BMSubjectServiceProto"
    },
    nested: {
      BMBatchDataPage: {
        fields: {
          page: {
            type: "int32",
            id: 1
          },
          pagesize: {
            type: "int32",
            id: 2
          },
          offset: {
            type: "int32",
            id: 3
          },
          totalRecords: {
            type: "float",
            id: 4
          },
          rows: {
            type: "google.protobuf.Any",
            id: 5
          }
        }
      },
      BMDataPageRequestParam: {
        fields: {
          page: {
            type: "int32",
            id: 1
          },
          pagesize: {
            type: "int32",
            id: 2
          }
        }
      },
      BMManagerService: {
        methods: {
          listRoleUserData: {
            requestType: "RequestRoleUserData",
            responseType: "ResponseRoleUserData"
          },
          listOperationManagerData: {
            requestType: "RequestId",
            responseType: "ResponseSchoolListByOperationManagerId"
          }
        }
      },
      RequestId: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      ResponseSchoolListByOperationManagerId: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          schoolInfo: {
            rule: "repeated",
            type: "SchoolInfo",
            id: 3
          }
        }
      },
      SchoolInfo: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          customerType: {
            type: "int32",
            id: 3
          },
          teacherNum: {
            type: "int32",
            id: 4
          },
          classNum: {
            type: "int32",
            id: 5
          },
          studentNum: {
            type: "int32",
            id: 6
          },
          CustomerInfo: {
            rule: "repeated",
            type: "CustomerInfo",
            id: 7
          }
        }
      },
      CustomerInfo: {
        fields: {
          superiorId: {
            type: "int64",
            id: 1
          },
          superiorName: {
            type: "string",
            id: 2
          },
          customerType: {
            type: "int32",
            id: 3
          }
        }
      },
      ResponseRoleUserData: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          total: {
            type: "int64",
            id: 3
          },
          pages: {
            type: "int32",
            id: 4
          },
          pageNo: {
            type: "int32",
            id: 5
          },
          pageSize: {
            type: "int32",
            id: 6
          },
          datas: {
            rule: "repeated",
            type: "RoleDataVo",
            id: 7
          }
        }
      },
      RoleDataVo: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          userName: {
            type: "string",
            id: 2
          },
          customerNum: {
            type: "int32",
            id: 3
          },
          schoolNum: {
            type: "int32",
            id: 4
          },
          classNum: {
            type: "int32",
            id: 5
          },
          studentNum: {
            type: "int32",
            id: 6
          }
        }
      },
      RequestRoleUserData: {
        fields: {
          pageNo: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          },
          roleName: {
            type: "string",
            id: 3
          },
          name: {
            type: "string",
            id: 4
          }
        }
      },
      BMPrivilegeService: {
        methods: {}
      },
      BMRoleService: {
        methods: {}
      },
      BMSubjectService: {
        methods: {
          listSchoolingLength: {
            requestType: "RequestBMSubjectSchoolingLength",
            responseType: "BMSubjectResponseSchoolingLengthList"
          },
          insertSubject: {
            requestType: "SubjectP",
            responseType: "BMSubjectBaseResponse"
          },
          deleteSubject: {
            requestType: "RequestSubjectId",
            responseType: "BMSubjectBaseResponse"
          },
          updateSubject: {
            requestType: "SubjectP",
            responseType: "BMSubjectBaseResponse"
          },
          listSubject: {
            requestType: "RequestSubjectList",
            responseType: "BMSubjectResponseSubjectList"
          },
          listGrade: {
            requestType: "RequestGradeList",
            responseType: "BMSubjectResponseGradeList"
          },
          listConfigData: {
            requestType: "RequestConfigDataList",
            responseType: "BMResponseConfigDataList"
          },
          listEdition: {
            requestType: "RequestEditionList",
            responseType: "ResponseEditionList"
          },
          insertEdition: {
            requestType: "RequestInsertEdition",
            responseType: "BMSubjectBaseResponse"
          },
          updateEdition: {
            requestType: "RequestUpdateEdition",
            responseType: "BMSubjectBaseResponse"
          },
          deleteEdition: {
            requestType: "RequestDeleteEdition",
            responseType: "BMSubjectBaseResponse"
          },
          listChapter: {
            requestType: "RequestChapterList",
            responseType: "ResponseChapterList"
          },
          getConfigDataById: {
            requestType: "RequestConfigDataById",
            responseType: "BMResponseConfigData"
          }
        }
      },
      SubjectP: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          code: {
            type: "string",
            id: 2
          },
          subjectName: {
            type: "string",
            id: 3
          },
          gradeRange: {
            type: "string",
            id: 4
          },
          stageId: {
            type: "string",
            id: 5
          }
        }
      },
      SubjectVo: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          code: {
            type: "string",
            id: 2
          },
          subjectName: {
            type: "string",
            id: 3
          },
          gradeRange: {
            type: "string",
            id: 4
          },
          stageId: {
            type: "string",
            id: 5
          },
          relaEdtionNum: {
            type: "string",
            id: 6
          }
        }
      },
      GradeVo: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          stageId: {
            type: "int32",
            id: 2
          },
          gradeName: {
            type: "string",
            id: 3
          }
        }
      },
      ConfigDataVo: {
        fields: {
          typeId: {
            type: "int32",
            id: 1
          },
          typeName: {
            type: "string",
            id: 2
          },
          categoryId: {
            type: "int32",
            id: 3
          },
          categoryName: {
            type: "string",
            id: 4
          }
        }
      },
      EditionVo: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          stageId: {
            type: "int32",
            id: 2
          },
          gradeId: {
            type: "int32",
            id: 3
          },
          subjectId: {
            type: "int32",
            id: 4
          },
          pressId: {
            type: "int32",
            id: 5
          },
          fascicleId: {
            type: "int32",
            id: 6
          },
          coverUrl: {
            type: "string",
            id: 7
          },
          gradeName: {
            type: "string",
            id: 8
          },
          fascicleName: {
            type: "string",
            id: 9
          }
        }
      },
      ChapterVo: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          chapterName: {
            type: "string",
            id: 2
          },
          chapterIndex: {
            type: "int32",
            id: 3
          },
          editionId: {
            type: "int32",
            id: 4
          },
          parentId: {
            type: "string",
            id: 5
          }
        }
      },
      RequestConfigDataById: {
        fields: {
          typeId: {
            type: "int32",
            id: 1
          },
          categoryId: {
            type: "int32",
            id: 2
          }
        }
      },
      RequestDeleteEdition: {
        fields: {
          id: {
            type: "int32",
            id: 1
          }
        }
      },
      RequestUpdateEdition: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          stageId: {
            type: "int32",
            id: 2
          },
          gradeId: {
            type: "int32",
            id: 3
          },
          subjectId: {
            type: "int32",
            id: 4
          },
          pressId: {
            type: "int32",
            id: 5
          },
          fascicleId: {
            type: "int32",
            id: 6
          },
          coverUrl: {
            type: "string",
            id: 7
          },
          gradeName: {
            type: "string",
            id: 8
          },
          fascicleName: {
            type: "string",
            id: 9
          },
          datas: {
            rule: "repeated",
            type: "ChapterVo",
            id: 10
          }
        }
      },
      RequestInsertEdition: {
        fields: {
          stageId: {
            type: "int32",
            id: 1
          },
          gradeId: {
            type: "int32",
            id: 2
          },
          subjectId: {
            type: "int32",
            id: 3
          },
          pressId: {
            type: "int32",
            id: 4
          },
          fascicleId: {
            type: "int32",
            id: 5
          },
          coverUrl: {
            type: "string",
            id: 6
          },
          gradeName: {
            type: "string",
            id: 7
          },
          fascicleName: {
            type: "string",
            id: 8
          },
          datas: {
            rule: "repeated",
            type: "ChapterVo",
            id: 9
          }
        }
      },
      RequestSubjectId: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      RequestSubjectList: {
        fields: {
          stageId: {
            type: "int32",
            id: 1
          }
        }
      },
      RequestGradeList: {
        fields: {
          stageId: {
            type: "string",
            id: 1
          }
        }
      },
      RequestConfigDataList: {
        fields: {
          id: {
            type: "int32",
            id: 1
          }
        }
      },
      RequestEditionList: {
        fields: {
          pageNo: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          },
          gradeId: {
            type: "int32",
            id: 3
          },
          pressId: {
            type: "int32",
            id: 4
          },
          subjectId: {
            type: "int32",
            id: 5
          },
          stageId: {
            type: "int32",
            id: 6
          }
        }
      },
      RequestChapterList: {
        fields: {
          editionId: {
            type: "int32",
            id: 1
          },
          parentId: {
            type: "string",
            id: 2
          }
        }
      },
      ResponseChapterList: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          datas: {
            rule: "repeated",
            type: "ChapterVo",
            id: 3
          }
        }
      },
      ResponseEditionList: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          total: {
            type: "int64",
            id: 3
          },
          pages: {
            type: "int32",
            id: 4
          },
          pageNo: {
            type: "int32",
            id: 5
          },
          pageSize: {
            type: "int32",
            id: 6
          },
          datas: {
            rule: "repeated",
            type: "EditionVo",
            id: 7
          }
        }
      },
      BMResponseConfigData: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          typeId: {
            type: "int32",
            id: 3
          },
          typeName: {
            type: "string",
            id: 4
          }
        }
      },
      BMResponseConfigDataList: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          datas: {
            rule: "repeated",
            type: "ConfigDataVo",
            id: 3
          }
        }
      },
      BMSubjectResponseSubjectList: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          datas: {
            rule: "repeated",
            type: "SubjectVo",
            id: 3
          }
        }
      },
      BMSubjectResponseGradeList: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          datas: {
            rule: "repeated",
            type: "GradeVo",
            id: 3
          }
        }
      },
      BMSubjectBaseResponse: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          }
        }
      }
    }
  },
  ReturnCode: {
    values: {
      SYS_OK: 0,
      SYS_ERR_EXCEPTION: 999,
      SYS_ERR_NOAUTH: 1,
      SYS_ERR_TOKENINVALID: 2,
      SYS_ERR_PARAMERROR: 3,
      SYS_ERR_RPCSERVICEERROR: 4,
      SYS_ERR_UPLOADAUDIO: 5,
      SYS_ERR_UPLOADFILE: 6,
      SYS_ERR_NOAUDIOFILE: 7,
      SYS_ERR_NOIMAGEFILE: 8,
      SYS_ERR_BUSINESSEXCEPTION: 9
    }
  },
  SchoolingLength: {
    fields: {
      id: {
        type: "string",
        id: 1
      },
      code: {
        type: "string",
        id: 2
      },
      schoolingLengthName: {
        type: "string",
        id: 3
      },
      gradeId: {
        type: "string",
        id: 4
      }
    }
  },
  RequestBMSubjectSchoolingLength: {
    fields: {
      id: {
        type: "string",
        id: 1
      }
    }
  },
  BMSubjectResponseSchoolingLengthList: {
    fields: {
      code: {
        type: "string",
        id: 1
      },
      msg: {
        type: "string",
        id: 2
      },
      datas: {
        rule: "repeated",
        type: "SchoolingLength",
        id: 3
      }
    }
  },
  customercenter: {
    options: {
      java_multiple_files: true,
      java_package: "com.szwdcloud.customercenter.proto.customercenter",
      java_outer_classname: "CustomerAnalysisServiceProto"
    },
    nested: {
      CCBatchDataPageMsg: {
        fields: {
          pageNo: {
            type: "int32",
            id: 1
          },
          pagesize: {
            type: "int32",
            id: 2
          },
          pages: {
            type: "int32",
            id: 3
          },
          totalRecords: {
            type: "float",
            id: 4
          },
          rows: {
            type: "google.protobuf.Any",
            id: 5
          },
          code: {
            type: "string",
            id: 6
          },
          msg: {
            type: "string",
            id: 7
          }
        }
      },
      CCDataPageRequestParamMsg: {
        fields: {
          pageNo: {
            type: "int32",
            id: 1
          },
          pagesize: {
            type: "int32",
            id: 2
          }
        }
      },
      ReplyMsg: {
        fields: {
          rows: {
            type: "google.protobuf.Any",
            id: 1
          },
          code: {
            type: "string",
            id: 2
          },
          msg: {
            type: "string",
            id: 3
          }
        }
      },
      CommonService: {
        methods: {}
      },
      AddressListMsg: {
        fields: {
          addressMsg: {
            rule: "repeated",
            type: "AddressMsg",
            id: 1
          }
        }
      },
      AddressMsg: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          provinceId: {
            type: "string",
            id: 2
          },
          provinceName: {
            type: "string",
            id: 3
          },
          cityId: {
            type: "string",
            id: 4
          },
          cityName: {
            type: "string",
            id: 5
          },
          districtName: {
            type: "string",
            id: 6
          }
        }
      },
      RequestListProvince: {
        fields: {
          code: {
            type: "string",
            id: 1
          }
        }
      },
      RequestListCity: {
        fields: {
          provinceId: {
            type: "string",
            id: 1
          }
        }
      },
      RequestListDistrict: {
        fields: {
          cityId: {
            type: "string",
            id: 1
          }
        }
      },
      CustomerListService: {
        methods: {
          searchCustomer: {
            requestType: "RequestCustomerSearch",
            responseType: "CCBatchDataPageMsg"
          },
          insertCustomer: {
            requestType: "RequestCustomerInsert",
            responseType: "InsertReply"
          },
          editCustomer: {
            requestType: "RequestCustomerEdit",
            responseType: "ReplyMsg"
          },
          updateCustomer: {
            requestType: "RequestCustomerUpdate",
            responseType: "BooleanReply"
          },
          deleteCustomer: {
            requestType: "RequestCustomerDelete",
            responseType: "BooleanReply"
          },
          listOrgani: {
            requestType: "RequestListOrgani",
            responseType: "CCBatchDataPageMsg"
          },
          searchOrgani: {
            requestType: "RequestSearchOrgani",
            responseType: "ReplyMsg"
          },
          insertOrgani: {
            requestType: "RequestInsertOrgani",
            responseType: "BooleanReply"
          },
          editOrgani: {
            requestType: "RequestEditOrgani",
            responseType: "ReplyMsg"
          },
          updateOrgani: {
            requestType: "RequestUpdateOrgani",
            responseType: "BooleanReply"
          },
          deleteOrgani: {
            requestType: "RequestDeleteOrgani",
            responseType: "BooleanReply"
          },
          updateBusinessStatus: {
            requestType: "RequestUpdateBusiness",
            responseType: "BooleanReply"
          },
          listBusinessInfo: {
            requestType: "RequestListBusinessInfo",
            responseType: "CCBatchDataPageMsg"
          },
          addUnderLingSchool: {
            requestType: "RequestAddUnderLingSchool",
            responseType: "BooleanReply"
          },
          deleteUnderLingSchool: {
            requestType: "RequestDeleteUnderLingSchool",
            responseType: "BooleanReply"
          },
          listSchool: {
            requestType: "RequestListSchool",
            responseType: "ReplyMsg"
          },
          listCommonConfig: {
            requestType: "RequestCommonConfig",
            responseType: "ReplyMsg"
          },
          selectCustomerNumByIdParam: {
            requestType: "RequestSelectCustomerNumByIdParam",
            responseType: "ResponseSelectCustomerNumByIdParam"
          },
          listSchoolByIdParam: {
            requestType: "RequestListSchoolByIdParam",
            responseType: "ResponseListSchoolByIdParam"
          },
          updateRelationByIdParam: {
            requestType: "RequestUpdateRelationByIdParam",
            responseType: "BooleanReply"
          },
          selectCustomerInfo: {
            requestType: "RequestSelectCustomerInfo",
            responseType: "ReplyMsg"
          },
          listCustomerByCustomerType: {
            requestType: "RequestListCustomerByCustomerType",
            responseType: "ReplyMsg"
          },
          listUnderLingSchoolAllInfo: {
            requestType: "RequestListUnderLingSchoolAllInfo",
            responseType: "ReplyMsg"
          },
          listPcustomer: {
            requestType: "RequestListPcustomer",
            responseType: "ReplyMsg"
          },
          listUnderLingSchool: {
            requestType: "RequestListUnderLingSchool",
            responseType: "ReplyMsg"
          },
          fuzzyQueryCustomer: {
            requestType: "RequestFuzzyQueryCustomer",
            responseType: "ReplyMsg"
          },
          getCustomerInfo: {
            requestType: "RequestCustomerInfo",
            responseType: "RespCustomerInfo"
          }
        }
      },
      InsertReply: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          customerId: {
            type: "int64",
            id: 3
          }
        }
      },
      RequestCustomerInfo: {
        fields: {
          keyWord: {
            type: "string",
            id: 1
          },
          customerId: {
            type: "int64",
            id: 2
          },
          customerType: {
            type: "int32",
            id: 3
          }
        }
      },
      RespCustomerInfo: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          data: {
            rule: "repeated",
            type: "CustomerInfoVo",
            id: 3
          }
        }
      },
      CustomerInfoVo: {
        fields: {
          customerId: {
            type: "int64",
            id: 1
          },
          customerName: {
            type: "string",
            id: 2
          }
        }
      },
      CustomerMsg: {
        fields: {
          customerName: {
            type: "string",
            id: 1
          },
          customerType: {
            type: "int32",
            id: 2
          },
          stageType: {
            type: "string",
            id: 3
          },
          status: {
            type: "int32",
            id: 4
          },
          deirectlyUnderSchool: {
            type: "string",
            id: 5
          },
          deirectlyUnderEducationGroup: {
            type: "string",
            id: 6
          },
          businessListMsg: {
            rule: "repeated",
            type: "BusinessListMsg",
            id: 7
          },
          totalClassNum: {
            type: "int32",
            id: 8
          },
          totalStudentNum: {
            type: "int32",
            id: 9
          },
          totalTeacherNum: {
            type: "int32",
            id: 10
          },
          totalParentNum: {
            type: "int32",
            id: 11
          },
          customerId: {
            type: "int64",
            id: 12
          },
          pCustomerInfo: {
            rule: "repeated",
            type: "CustomerNumDetailMsg",
            id: 13
          },
          underLingSchoolInfo: {
            rule: "repeated",
            type: "CustomerNumDetailMsg",
            id: 14
          },
          schoolingLengthId: {
            type: "int32",
            id: 16
          }
        }
      },
      BusinessMsg: {
        fields: {
          businessId: {
            type: "int32",
            id: 1
          },
          businessName: {
            type: "string",
            id: 2
          },
          status: {
            type: "int32",
            id: 4
          }
        }
      },
      OrganiMsg: {
        fields: {
          organiId: {
            type: "int64",
            id: 1
          },
          organiName: {
            type: "string",
            id: 2
          },
          parentOrganiId: {
            type: "int64",
            id: 3
          },
          organiManagerInfoMsg: {
            rule: "repeated",
            type: "OrganiManagerInfoMsg",
            id: 4
          }
        }
      },
      SchoolMsg: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          customerType: {
            type: "int32",
            id: 3
          },
          superiorCustomerInfo: {
            rule: "repeated",
            type: "SuperiorCustomerInfo",
            id: 4
          }
        }
      },
      SuperiorCustomerInfo: {
        fields: {
          superiorId: {
            type: "int64",
            id: 1
          },
          superiorName: {
            type: "string",
            id: 2
          },
          customerType: {
            type: "int32",
            id: 3
          }
        }
      },
      CustomerNumMsg: {
        fields: {
          customerNum: {
            type: "int32",
            id: 1
          },
          schoolNum: {
            type: "int32",
            id: 2
          },
          schoolId: {
            rule: "repeated",
            type: "int64",
            id: 3
          }
        }
      },
      UpdateSchoolRelationMsg: {
        fields: {
          schoolId: {
            type: "int64",
            id: 1
          },
          newOperationManagerId: {
            type: "string",
            id: 2
          }
        }
      },
      CommonConfig: {
        fields: {
          typeId: {
            type: "int32",
            id: 1
          },
          typeName: {
            type: "string",
            id: 2
          },
          categoryId: {
            type: "int32",
            id: 3
          },
          categoryName: {
            type: "string",
            id: 4
          }
        }
      },
      CustomerNumDetailMsg: {
        fields: {
          customerId: {
            type: "int64",
            id: 1
          },
          customerName: {
            type: "string",
            id: 2
          },
          customerType: {
            type: "int32",
            id: 3
          },
          num: {
            type: "int32",
            id: 4
          }
        }
      },
      RequestCustomerSearch: {
        fields: {
          keyWord: {
            type: "string",
            id: 1
          },
          customerType: {
            type: "int32",
            id: 2
          },
          businessId: {
            type: "int32",
            id: 3
          },
          status: {
            type: "int32",
            id: 4
          },
          customerId: {
            type: "int64",
            id: 5
          },
          pageNo: {
            type: "int32",
            id: 6
          },
          pageSize: {
            type: "int32",
            id: 7
          }
        }
      },
      RequestCustomerInsert: {
        fields: {
          customerName: {
            type: "string",
            id: 1
          },
          customerType: {
            type: "int32",
            id: 2
          },
          stageType: {
            type: "string",
            id: 3
          },
          streetName: {
            type: "string",
            id: 4
          },
          addressId: {
            type: "string",
            id: 5
          },
          logo: {
            type: "string",
            id: 6
          },
          salesManagerId: {
            type: "string",
            id: 7
          },
          operationManagerId: {
            type: "string",
            id: 8
          },
          customerOfficerName: {
            type: "string",
            id: 9
          },
          customerOfficerMobile: {
            type: "string",
            id: 10
          },
          customerLinkmanName: {
            type: "string",
            id: 11
          },
          customerLinkmanMobile: {
            type: "string",
            id: 12
          },
          schoolingLengthId: {
            type: "int32",
            id: 13
          },
          comment: {
            type: "string",
            id: 14
          },
          status: {
            type: "int32",
            id: 15
          }
        }
      },
      RequestCustomerUpdate: {
        fields: {
          customerName: {
            type: "string",
            id: 1
          },
          customerType: {
            type: "int32",
            id: 2
          },
          stageType: {
            type: "string",
            id: 3
          },
          streetName: {
            type: "string",
            id: 4
          },
          addressId: {
            type: "string",
            id: 5
          },
          logo: {
            type: "string",
            id: 6
          },
          salesManagerId: {
            type: "string",
            id: 7
          },
          operationManagerId: {
            type: "string",
            id: 8
          },
          customerOfficerName: {
            type: "string",
            id: 9
          },
          customerOfficerMobile: {
            type: "string",
            id: 10
          },
          customerLinkmanName: {
            type: "string",
            id: 11
          },
          customerLinkmanMobile: {
            type: "string",
            id: 12
          },
          schoolingLengthId: {
            type: "int32",
            id: 13
          },
          comment: {
            type: "string",
            id: 14
          },
          id: {
            type: "int64",
            id: 15
          },
          status: {
            type: "int32",
            id: 16
          }
        }
      },
      RequestCustomerDelete: {
        fields: {
          id: {
            type: "int64",
            id: 1
          }
        }
      },
      RequestListBusinessInfo: {
        fields: {
          customerId: {
            type: "int64",
            id: 1
          },
          pageNo: {
            type: "int32",
            id: 5
          },
          pageSize: {
            type: "int32",
            id: 6
          }
        }
      },
      RequestUpdateBusiness: {
        fields: {
          customerId: {
            type: "int64",
            id: 1
          },
          businessId: {
            type: "int32",
            id: 2
          },
          status: {
            type: "int32",
            id: 3
          }
        }
      },
      RequestDeleteOrgani: {
        fields: {
          id: {
            type: "int64",
            id: 1
          }
        }
      },
      RequestUpdateOrgani: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          pId: {
            type: "int64",
            id: 3
          },
          managerInfoMsg: {
            rule: "repeated",
            type: "OrganiManagerInfoMsg",
            id: 4
          }
        }
      },
      RequestInsertOrgani: {
        fields: {
          name: {
            type: "string",
            id: 1
          },
          pId: {
            type: "int64",
            id: 2
          },
          managerInfoMsg: {
            rule: "repeated",
            type: "OrganiManagerInfoMsg",
            id: 3
          }
        }
      },
      RequestListOrgani: {
        fields: {
          organiId: {
            type: "int64",
            id: 2
          },
          pageNo: {
            type: "int32",
            id: 5
          },
          pageSize: {
            type: "int32",
            id: 6
          }
        }
      },
      RequestSearchOrgani: {
        fields: {
          rule: {
            type: "int32",
            id: 1
          },
          keyword: {
            type: "string",
            id: 2
          }
        }
      },
      RequestAddUnderLingSchool: {
        fields: {
          customerId: {
            type: "int64",
            id: 1
          },
          underLingId: {
            type: "int64",
            id: 2
          }
        }
      },
      RequestDeleteUnderLingSchool: {
        fields: {
          customerId: {
            type: "int64",
            id: 1
          },
          underLingId: {
            type: "int64",
            id: 3
          }
        }
      },
      RequestListSchool: {
        fields: {
          code: {
            type: "string",
            id: 1
          }
        }
      },
      RequestSelectCustomerNumByIdParam: {
        fields: {
          operationManagerId: {
            type: "string",
            id: 1
          }
        }
      },
      RequestListSchoolByIdParam: {
        fields: {
          operationManagerId: {
            type: "string",
            id: 1
          }
        }
      },
      RequestUpdateRelationByIdParam: {
        fields: {
          operationManagerId: {
            type: "string",
            id: 1
          },
          updateSchoolRelationMsg: {
            rule: "repeated",
            type: "UpdateSchoolRelationMsg",
            id: 2
          }
        }
      },
      RequestSelectCustomerInfo: {
        fields: {
          customerId: {
            type: "string",
            id: 1
          }
        }
      },
      RequestListCustomerByCustomerType: {
        fields: {
          customerType: {
            type: "int32",
            id: 1
          }
        }
      },
      RequestCustomerEdit: {
        fields: {
          customerId: {
            type: "int64",
            id: 1
          }
        }
      },
      RequestEditOrgani: {
        fields: {
          organiId: {
            type: "int64",
            id: 1
          }
        }
      },
      RequestCommonConfig: {
        fields: {
          categoryId: {
            type: "int32",
            id: 1
          }
        }
      },
      RequestListUnderLingSchoolAllInfo: {
        fields: {
          customerId: {
            type: "int64",
            id: 1
          }
        }
      },
      RequestFuzzyQueryCustomer: {
        fields: {
          keyWord: {
            type: "string",
            id: 1
          },
          customerId: {
            type: "int64",
            id: 2
          },
          customerType: {
            type: "int32",
            id: 3
          }
        }
      },
      RequestListPcustomer: {
        fields: {
          customerId: {
            type: "int64",
            id: 1
          }
        }
      },
      RequestListUnderLingSchool: {
        fields: {
          customerId: {
            type: "int64",
            id: 1
          }
        }
      },
      CustomerNumDetailList: {
        fields: {
          customerNumDetailMsg: {
            rule: "repeated",
            type: "CustomerNumDetailMsg",
            id: 1
          }
        }
      },
      BooleanReply: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          }
        }
      },
      CustomerListMsg: {
        fields: {
          customerMsg: {
            rule: "repeated",
            type: "CustomerMsg",
            id: 1
          }
        }
      },
      BusinessListMsg: {
        fields: {
          businessMsg: {
            rule: "repeated",
            type: "BusinessMsg",
            id: 1
          }
        }
      },
      OrganiListMsg: {
        fields: {
          organiMsg: {
            rule: "repeated",
            type: "OrganiMsg",
            id: 1
          }
        }
      },
      OrganiManagerInfoMsg: {
        fields: {
          managerId: {
            type: "string",
            id: 1
          },
          managerName: {
            type: "string",
            id: 2
          }
        }
      },
      SchoolListMsg: {
        fields: {
          schoolMsg: {
            rule: "repeated",
            type: "SchoolMsg",
            id: 1
          }
        }
      },
      ResponseSelectCustomerNumByIdParam: {
        fields: {
          customerNum: {
            type: "int32",
            id: 1
          },
          schoolNum: {
            type: "int32",
            id: 2
          },
          schoolId: {
            rule: "repeated",
            type: "int32",
            id: 3
          }
        }
      },
      ResponseListSchoolByIdParam: {
        fields: {
          schoolMsg: {
            rule: "repeated",
            type: "SchoolMsg",
            id: 1
          }
        }
      },
      ResponseSelectCustomerInfo: {
        fields: {
          customerId: {
            type: "int64",
            id: 1
          },
          customerName: {
            type: "string",
            id: 2
          },
          superiorCustomerAllInfo: {
            rule: "repeated",
            type: "SuperiorCustomerAllInfo",
            id: 3
          }
        }
      },
      SuperiorCustomerAllInfo: {
        fields: {
          superiorId: {
            type: "int64",
            id: 1
          },
          superiorName: {
            type: "string",
            id: 2
          },
          customerType: {
            type: "int32",
            id: 3
          },
          underlingSchoolNum: {
            type: "int32",
            id: 4
          },
          SchoolMsg: {
            rule: "repeated",
            type: "SchoolMsg",
            id: 5
          }
        }
      },
      ResponseCustomerEdit: {
        fields: {
          customerId: {
            type: "int64",
            id: 1
          },
          customerType: {
            type: "int32",
            id: 2
          },
          stageType: {
            type: "string",
            id: 3
          },
          customerName: {
            type: "string",
            id: 4
          },
          addressId: {
            type: "string",
            id: 5
          },
          streetName: {
            type: "string",
            id: 6
          },
          status: {
            type: "int32",
            id: 7
          },
          salesManagerId: {
            type: "string",
            id: 8
          },
          operationManagerId: {
            type: "string",
            id: 9
          },
          customerOfficerName: {
            type: "string",
            id: 10
          },
          customerOfficerMobile: {
            type: "string",
            id: 11
          },
          customerLinkmanName: {
            type: "string",
            id: 12
          },
          customerLinkmanMobile: {
            type: "string",
            id: 13
          },
          logo: {
            type: "string",
            id: 14
          },
          schoolingLengthId: {
            type: "int32",
            id: 15
          },
          comment: {
            type: "string",
            id: 16
          }
        }
      },
      ResponseOrganiEdit: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          organiName: {
            type: "string",
            id: 2
          },
          parentOrganiId: {
            type: "int64",
            id: 3
          },
          organiManagerInfoMsg: {
            rule: "repeated",
            type: "OrganiManagerInfoMsg",
            id: 4
          }
        }
      },
      CommonConfigList: {
        fields: {
          commonConfig: {
            rule: "repeated",
            type: "CommonConfig",
            id: 1
          }
        }
      },
      CustomerAnalysisService: {
        methods: {
          countCustomer: {
            requestType: "RequestCountCustomer",
            responseType: "ReplyMsg"
          },
          countEachMonthCustomer: {
            requestType: "RequestCountEachMonthCustomer",
            responseType: "ReplyMsg"
          }
        }
      },
      CountCustomerMsg: {
        fields: {
          num: {
            type: "int32",
            id: 1
          },
          month: {
            type: "int32",
            id: 2
          }
        }
      },
      RequestCountCustomer: {
        fields: {
          countRule: {
            type: "int32",
            id: 1
          },
          type: {
            type: "int32",
            id: 2
          }
        }
      },
      RequestCountEachMonthCustomer: {
        fields: {
          year: {
            type: "int32",
            id: 1
          }
        }
      },
      ResponseCountEachMonthCustomer: {
        fields: {
          countCustomerMsg: {
            rule: "repeated",
            type: "CountCustomerMsg",
            id: 1
          }
        }
      }
    }
  },
  platformserver: {
    options: {
      java_multiple_files: true,
      java_package: "com.szwdcloud.platformserver.proto.platformserver",
      java_outer_classname: "ServerCommonMessageProto"
    },
    nested: {
      ServerBatchDataPage: {
        fields: {
          page: {
            type: "int32",
            id: 1
          },
          pagesize: {
            type: "int32",
            id: 2
          },
          offset: {
            type: "int32",
            id: 3
          },
          totalRecords: {
            type: "float",
            id: 4
          },
          rows: {
            type: "google.protobuf.Any",
            id: 5
          }
        }
      },
      ServerDataPageRequestParam: {
        fields: {
          page: {
            type: "int32",
            id: 1
          },
          pagesize: {
            type: "int32",
            id: 2
          }
        }
      },
      Response: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          datas: {
            type: "google.protobuf.Any",
            id: 3
          }
        }
      },
      CountResult: {
        fields: {
          count: {
            type: "int32",
            id: 1
          }
        }
      },
      ExceptionResult: {
        fields: {
          exMsg: {
            type: "string",
            id: 1
          }
        }
      },
      ServerCommonService: {
        methods: {
          login: {
            requestType: "LoginRequest",
            responseType: "Response"
          }
        }
      },
      LoginRequest: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          password: {
            type: "string",
            id: 2
          },
          token: {
            type: "string",
            id: 3
          },
          loginType: {
            type: "int32",
            id: 4
          },
          loginSource: {
            type: "int32",
            id: 5
          }
        }
      },
      LoginResult: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          userName: {
            type: "string",
            id: 2
          },
          schoolId: {
            type: "int64",
            id: 3
          },
          auth: {
            rule: "repeated",
            type: "Auth",
            id: 4
          }
        },
        nested: {
          Auth: {
            fields: {
              id: {
                type: "string",
                id: 5
              },
              code: {
                type: "string",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              url: {
                type: "string",
                id: 3
              },
              parentId: {
                type: "string",
                id: 4
              }
            }
          }
        }
      },
      ServerPrivilegeService: {
        methods: {
          save: {
            requestType: "PrivilegeSaveRequest",
            responseType: "Response"
          },
          update: {
            requestType: "PrivilegeUpdateRequest",
            responseType: "Response"
          },
          "delete": {
            requestType: "PrivilegeDeleteRequest",
            responseType: "Response"
          },
          findChild: {
            requestType: "FindChildRequest",
            responseType: "Response"
          },
          findAll: {
            requestType: "FindAllPrivilegeRequest",
            responseType: "Response"
          },
          findPrivilegeSelective: {
            requestType: "FindPrivilegesRequest",
            responseType: "Response"
          },
          findOne: {
            requestType: "FindOneRequest",
            responseType: "Response"
          }
        }
      },
      PrivilegeSaveRequest: {
        fields: {
          parentId: {
            type: "string",
            id: 1
          },
          code: {
            type: "string",
            id: 2
          },
          name: {
            type: "string",
            id: 3
          },
          systemCategory: {
            type: "int32",
            id: 5
          },
          type: {
            type: "int32",
            id: 6
          },
          url: {
            type: "string",
            id: 7
          }
        }
      },
      PrivilegeUpdateRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          parentId: {
            type: "string",
            id: 2
          },
          code: {
            type: "string",
            id: 3
          },
          name: {
            type: "string",
            id: 4
          },
          moduleName: {
            type: "string",
            id: 5
          },
          systemCategory: {
            type: "int32",
            id: 6
          },
          type: {
            type: "int32",
            id: 7
          },
          url: {
            type: "string",
            id: 8
          }
        }
      },
      FindChildRequest: {
        fields: {
          systemId: {
            type: "int32",
            id: 1
          },
          parentid: {
            type: "string",
            id: 2
          },
          parentName: {
            type: "string",
            id: 3
          }
        }
      },
      FindChildResult: {
        fields: {
          privilege: {
            rule: "repeated",
            type: "Privilege",
            id: 1
          }
        },
        nested: {
          Privilege: {
            fields: {
              id: {
                type: "string",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              }
            }
          }
        }
      },
      PrivilegeDeleteRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      FindPrivilegesRequest: {
        fields: {
          systemId: {
            type: "int32",
            id: 1
          },
          type: {
            type: "int32",
            id: 2
          }
        }
      },
      FindPrivilegesResult: {
        fields: {
          privilege: {
            rule: "repeated",
            type: "Privilege",
            id: 1
          }
        },
        nested: {
          Privilege: {
            fields: {
              id: {
                type: "string",
                id: 1
              },
              code: {
                type: "string",
                id: 2
              },
              name: {
                type: "string",
                id: 3
              },
              type: {
                type: "int32",
                id: 4
              },
              url: {
                type: "string",
                id: 5
              },
              parentId: {
                type: "string",
                id: 6
              }
            }
          }
        }
      },
      FindAllPrivilegeRequest: {
        fields: {
          systemId: {
            type: "string",
            id: 1
          },
          module: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          },
          pageNo: {
            type: "int32",
            id: 4
          },
          pageSize: {
            type: "int32",
            id: 5
          }
        }
      },
      FindAllPrivilegeResult: {
        fields: {
          privilege: {
            rule: "repeated",
            type: "Privilege",
            id: 1
          },
          total: {
            type: "int64",
            id: 2
          },
          pages: {
            type: "int32",
            id: 3
          },
          pageNo: {
            type: "int32",
            id: 4
          },
          pageSize: {
            type: "int32",
            id: 5
          }
        },
        nested: {
          Privilege: {
            fields: {
              id: {
                type: "string",
                id: 6
              },
              code: {
                type: "string",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              module: {
                type: "string",
                id: 3
              },
              type: {
                type: "int32",
                id: 4
              },
              url: {
                type: "string",
                id: 5
              }
            }
          }
        }
      },
      FindOneRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      FindOneResult: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          code: {
            type: "string",
            id: 2
          },
          name: {
            type: "string",
            id: 3
          },
          type: {
            type: "int32",
            id: 4
          },
          url: {
            type: "string",
            id: 5
          },
          systemId: {
            type: "int32",
            id: 6
          },
          parentIds: {
            rule: "repeated",
            type: "string",
            id: 7
          }
        }
      },
      ServerRoleService: {
        methods: {
          save: {
            requestType: "RoleSaveRequest",
            responseType: "Response"
          },
          update: {
            requestType: "RoleUpdateRequest",
            responseType: "Response"
          },
          "delete": {
            requestType: "RoleDeleteRequest",
            responseType: "Response"
          },
          findAllRoles: {
            requestType: "FindAllRolesRequest",
            responseType: "Response"
          },
          queryRoles: {
            requestType: "RolesQueryRequest",
            responseType: "Response"
          }
        }
      },
      RoleSaveRequest: {
        fields: {
          name: {
            type: "string",
            id: 1
          },
          type: {
            type: "int32",
            id: 2
          },
          privilegeId: {
            rule: "repeated",
            type: "string",
            id: 3
          }
        }
      },
      RoleUpdateRequest: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          type: {
            type: "int32",
            id: 2
          },
          name: {
            type: "string",
            id: 3
          },
          privilegeId: {
            rule: "repeated",
            type: "string",
            id: 4
          }
        }
      },
      RoleDeleteRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      RoleSearchRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          type: {
            type: "int32",
            id: 3
          }
        }
      },
      FindAllRolesRequest: {
        fields: {
          type: {
            type: "int32",
            id: 1
          }
        }
      },
      FindAllRolesResult: {
        fields: {
          role: {
            rule: "repeated",
            type: "Role",
            id: 1
          }
        },
        nested: {
          Role: {
            fields: {
              id: {
                type: "int32",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              type: {
                type: "int32",
                id: 3
              },
              createTime: {
                type: "google.protobuf.Timestamp",
                id: 4
              },
              updateTime: {
                type: "google.protobuf.Timestamp",
                id: 5
              }
            }
          }
        }
      },
      RolesQueryRequest: {
        fields: {
          roleId: {
            type: "int32",
            id: 1
          },
          privilegeId: {
            type: "string",
            id: 2
          },
          type: {
            type: "int32",
            id: 3
          },
          pageNo: {
            type: "int32",
            id: 4
          },
          pageSize: {
            type: "int32",
            id: 5
          }
        }
      },
      RoleQueryResult: {
        fields: {
          role: {
            rule: "repeated",
            type: "Role",
            id: 1
          },
          total: {
            type: "int64",
            id: 2
          },
          pages: {
            type: "int32",
            id: 3
          },
          pageNo: {
            type: "int32",
            id: 4
          },
          pageSize: {
            type: "int32",
            id: 5
          }
        },
        nested: {
          Role: {
            fields: {
              id: {
                type: "int32",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              systemId: {
                type: "int32",
                id: 6
              },
              createTime: {
                type: "google.protobuf.Timestamp",
                id: 3
              },
              privilegeName: {
                rule: "repeated",
                type: "string",
                id: 4
              },
              privilegeId: {
                rule: "repeated",
                type: "string",
                id: 5
              }
            }
          }
        }
      },
      ServerUserService: {
        methods: {
          save: {
            requestType: "SaveRequest",
            responseType: "Response"
          },
          update: {
            requestType: "UpdateRequest",
            responseType: "Response"
          },
          "delete": {
            requestType: "DeleteRequest",
            responseType: "Response"
          },
          findOne: {
            requestType: "FindOneUserRequest",
            responseType: "Response"
          },
          resetPassword: {
            requestType: "ResetPasswordRequest",
            responseType: "Response"
          },
          listUserByCondition: {
            requestType: "RequestUserListByCondition",
            responseType: "ResponseUserListByCondition"
          },
          searchPlatFormUser: {
            requestType: "PlatformUserSearchRequest",
            responseType: "Response"
          },
          searchCustomerUser: {
            requestType: "CustomerUserSearchRequest",
            responseType: "Response"
          },
          listRoleUserData: {
            requestType: "RequestUserListByCondition",
            responseType: "ResponseRoleUserData"
          },
          listOperationManagerData: {
            requestType: "RequestId",
            responseType: "ResponseSchoolListByOperationManagerId"
          }
        }
      },
      RequestId: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      ResponseSchoolListByOperationManagerId: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          schoolInfo: {
            rule: "repeated",
            type: "SchoolInfo",
            id: 3
          }
        }
      },
      SchoolInfo: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          customerType: {
            type: "int32",
            id: 3
          },
          teacherNum: {
            type: "int32",
            id: 4
          },
          classNum: {
            type: "int32",
            id: 5
          },
          studentNum: {
            type: "int32",
            id: 6
          },
          CustomerInfo: {
            rule: "repeated",
            type: "CustomerInfo",
            id: 7
          }
        }
      },
      CustomerInfo: {
        fields: {
          superiorId: {
            type: "int64",
            id: 1
          },
          superiorName: {
            type: "string",
            id: 2
          },
          customerType: {
            type: "int32",
            id: 3
          }
        }
      },
      ResponseRoleUserData: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          total: {
            type: "int64",
            id: 3
          },
          pages: {
            type: "int32",
            id: 4
          },
          pageNo: {
            type: "int32",
            id: 5
          },
          pageSize: {
            type: "int32",
            id: 6
          },
          datas: {
            rule: "repeated",
            type: "RoleDataVo",
            id: 7
          }
        }
      },
      RoleDataVo: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          userName: {
            type: "string",
            id: 2
          },
          customerNum: {
            type: "int32",
            id: 3
          },
          schoolNum: {
            type: "int32",
            id: 4
          },
          classNum: {
            type: "int32",
            id: 5
          },
          studentNum: {
            type: "int32",
            id: 6
          }
        }
      },
      ResponseUserListByCondition: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          total: {
            type: "int64",
            id: 3
          },
          pages: {
            type: "int32",
            id: 4
          },
          pageNo: {
            type: "int32",
            id: 5
          },
          pageSize: {
            type: "int32",
            id: 6
          },
          datas: {
            rule: "repeated",
            type: "UserVo",
            id: 7
          }
        }
      },
      UserVo: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          userName: {
            type: "string",
            id: 2
          },
          userMobile: {
            type: "string",
            id: 3
          }
        }
      },
      RequestUserListByCondition: {
        fields: {
          pageNo: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          },
          roleName: {
            type: "string",
            id: 3
          },
          name: {
            type: "string",
            id: 4
          },
          roleType: {
            type: "int32",
            id: 5
          }
        }
      },
      RequestUserById: {
        fields: {
          userId: {
            type: "string",
            id: 1
          }
        }
      },
      ResponseUserById: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          userVo: {
            type: "UserVo",
            id: 3
          }
        }
      },
      PlatformUserSearchRequest: {
        fields: {
          roleId: {
            type: "int32",
            id: 1
          },
          content: {
            type: "string",
            id: 2
          },
          pageNo: {
            type: "int32",
            id: 3
          },
          pageSize: {
            type: "int32",
            id: 4
          }
        }
      },
      PlatformUserSearchResult: {
        fields: {
          total: {
            type: "int64",
            id: 1
          },
          pages: {
            type: "int32",
            id: 2
          },
          pageNo: {
            type: "int32",
            id: 3
          },
          pageSize: {
            type: "int32",
            id: 4
          },
          user: {
            rule: "repeated",
            type: "User",
            id: 5
          }
        },
        nested: {
          User: {
            fields: {
              id: {
                type: "string",
                id: 1
              },
              username: {
                type: "string",
                id: 2
              },
              mobile: {
                type: "string",
                id: 3
              },
              status: {
                type: "int32",
                id: 4
              },
              createTime: {
                type: "google.protobuf.Timestamp",
                id: 5
              },
              roleName: {
                rule: "repeated",
                type: "string",
                id: 6
              }
            }
          }
        }
      },
      SaveRequest: {
        fields: {
          username: {
            type: "string",
            id: 1
          },
          mobile: {
            type: "string",
            id: 2
          },
          customerId: {
            type: "int64",
            id: 3
          },
          customerType: {
            type: "int32",
            id: 4
          },
          userType: {
            type: "int32",
            id: 5
          },
          status: {
            type: "int32",
            id: 6
          },
          roleId: {
            rule: "repeated",
            type: "int32",
            id: 7
          }
        }
      },
      UpdateRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          username: {
            type: "string",
            id: 2
          },
          mobile: {
            type: "string",
            id: 3
          },
          customerId: {
            type: "int64",
            id: 4
          },
          customerType: {
            type: "int32",
            id: 5
          },
          status: {
            type: "int32",
            id: 6
          },
          roleId: {
            rule: "repeated",
            type: "int32",
            id: 7
          }
        }
      },
      DeleteRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      ResetPasswordRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          password: {
            type: "string",
            id: 2
          }
        }
      },
      FindOneUserRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          }
        }
      },
      FindOneUserResult: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          username: {
            type: "string",
            id: 2
          },
          sex: {
            type: "int32",
            id: 3
          },
          age: {
            type: "int32",
            id: 4
          },
          mobile: {
            type: "string",
            id: 5
          },
          status: {
            type: "int32",
            id: 6
          },
          customerId: {
            type: "int64",
            id: 7
          },
          userPortrait: {
            type: "string",
            id: 8
          },
          role: {
            rule: "repeated",
            type: "Role",
            id: 9
          }
        },
        nested: {
          Role: {
            fields: {
              id: {
                type: "int32",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              }
            }
          }
        }
      },
      CustomerUserSearchRequest: {
        fields: {
          roleId: {
            type: "int32",
            id: 1
          },
          customerId: {
            type: "int64",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          },
          pageNo: {
            type: "int32",
            id: 4
          },
          pageSize: {
            type: "int32",
            id: 5
          }
        }
      },
      CustomerDetailMsg: {
        fields: {
          customerId: {
            type: "int64",
            id: 1
          },
          customerName: {
            type: "string",
            id: 2
          },
          customerType: {
            type: "int32",
            id: 3
          },
          num: {
            type: "int32",
            id: 4
          }
        }
      },
      CustomerUserSearchResult: {
        fields: {
          total: {
            type: "int64",
            id: 1
          },
          pages: {
            type: "int32",
            id: 2
          },
          pageNo: {
            type: "int32",
            id: 3
          },
          pageSize: {
            type: "int32",
            id: 4
          },
          user: {
            rule: "repeated",
            type: "User",
            id: 5
          }
        },
        nested: {
          User: {
            fields: {
              id: {
                type: "string",
                id: 1
              },
              username: {
                type: "string",
                id: 2
              },
              mobile: {
                type: "string",
                id: 3
              },
              customerName: {
                type: "string",
                id: 4
              },
              status: {
                type: "int32",
                id: 5
              },
              createTime: {
                type: "google.protobuf.Timestamp",
                id: 6
              },
              roleName: {
                rule: "repeated",
                type: "string",
                id: 7
              },
              pcustomerInfo: {
                rule: "repeated",
                type: "CustomerDetailMsg",
                id: 8
              }
            }
          }
        }
      }
    }
  },
  resourcecenter: {
    options: {
      java_multiple_files: true,
      java_package: "com.szwdcloud.resource.common",
      java_outer_classname: "RCCommonProto"
    },
    nested: {
      RCChapterPointRelationService: {
        methods: {
          listRelationsByChapterId: {
            requestType: "google.protobuf.Int32Value",
            responseType: "ListResp"
          },
          createRelation: {
            requestType: "CPRelationCreateReq",
            responseType: "EmptyResp"
          },
          deleteRelation: {
            requestType: "CPRelation",
            responseType: "EmptyResp"
          }
        }
      },
      CPRelationCreateReq: {
        fields: {
          values: {
            rule: "repeated",
            type: "CPRelation",
            id: 1
          }
        }
      },
      CPRelation: {
        fields: {
          chapterId: {
            type: "int32",
            id: 1
          },
          pointId: {
            type: "int32",
            id: 2
          },
          pointName: {
            type: "string",
            id: 3
          }
        }
      },
      EmptyResp: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          }
        }
      },
      SingleResp: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          data: {
            type: "google.protobuf.Any",
            id: 3
          }
        }
      },
      ListResp: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          datas: {
            rule: "repeated",
            type: "google.protobuf.Any",
            id: 3
          }
        }
      },
      PageResp: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          pageNo: {
            type: "int32",
            id: 3
          },
          pageSize: {
            type: "int32",
            id: 4
          },
          pages: {
            type: "int32",
            id: 5
          },
          total: {
            type: "int64",
            id: 6
          },
          datas: {
            rule: "repeated",
            type: "google.protobuf.Any",
            id: 7
          }
        }
      },
      RCCoursewareService: {
        methods: {
          insertCourseware: {
            requestType: "ReqInsertCourseware",
            responseType: "EmptyResp"
          },
          isJingCourseware: {
            requestType: "ReqCoursewareIsJing",
            responseType: "EmptyResp"
          },
          insertCoursewarePage: {
            requestType: "CoursewarePageVo",
            responseType: "EmptyResp"
          },
          updateCoursewarePage: {
            requestType: "CoursewarePageVo",
            responseType: "EmptyResp"
          },
          deleteCoursewarePage: {
            requestType: "CoursewarePageVo",
            responseType: "EmptyResp"
          },
          listCourseware: {
            requestType: "ReqCoursewareList",
            responseType: "ResponseCoursewareList"
          }
        }
      },
      CoursewarePageVo: {
        fields: {
          coursewareId: {
            type: "string",
            id: 1
          },
          text: {
            type: "string",
            id: 2
          },
          contentId: {
            type: "string",
            id: 3
          },
          contentType: {
            type: "int32",
            id: 4
          },
          pageNum: {
            type: "int32",
            id: 5
          }
        }
      },
      ReqInsertCourseware: {
        fields: {
          teacherId: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          customerId: {
            type: "int64",
            id: 3
          },
          editionId: {
            type: "int32",
            id: 4
          },
          chapterIds: {
            rule: "repeated",
            type: "int32",
            id: 5
          },
          pointIds: {
            rule: "repeated",
            type: "int32",
            id: 6
          }
        }
      },
      CoursewareVo: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          teacherId: {
            type: "string",
            id: 2
          },
          name: {
            type: "string",
            id: 3
          },
          customerId: {
            type: "int64",
            id: 4
          },
          subjectId: {
            type: "int32",
            id: 5
          },
          editionId: {
            type: "int32",
            id: 6
          },
          isBoutique: {
            type: "int32",
            id: 7
          },
          pageCount: {
            type: "int32",
            id: 8
          }
        }
      },
      ReqCoursewareIsJing: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          tag: {
            type: "int32",
            id: 2
          }
        }
      },
      ReqCoursewareList: {
        fields: {
          isBoutique: {
            type: "int32",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          subjectId: {
            type: "int32",
            id: 3
          },
          editionVersionId: {
            type: "int32",
            id: 4
          },
          stageId: {
            type: "int32",
            id: 5
          },
          gradeId: {
            type: "int32",
            id: 6
          },
          fascicleId: {
            type: "int32",
            id: 7
          },
          orderType: {
            type: "int32",
            id: 8
          },
          pageNo: {
            type: "int32",
            id: 9
          },
          pageSize: {
            type: "int32",
            id: 10
          }
        }
      },
      CoursewareItemVo: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          pageCount: {
            type: "int32",
            id: 2
          },
          isBoutique: {
            type: "int32",
            id: 3
          },
          editionVersionName: {
            type: "string",
            id: 4
          },
          gradeName: {
            type: "string",
            id: 5
          },
          subjectName: {
            type: "string",
            id: 6
          },
          coursewareName: {
            type: "string",
            id: 7
          },
          stage: {
            type: "string",
            id: 8
          },
          fascicle: {
            type: "string",
            id: 9
          },
          chapterName: {
            rule: "repeated",
            type: "string",
            id: 10
          },
          pointName: {
            rule: "repeated",
            type: "string",
            id: 11
          },
          updateTime: {
            type: "string",
            id: 12
          },
          referenceCount: {
            type: "int32",
            id: 13
          },
          schoolName: {
            type: "string",
            id: 14
          },
          teacherName: {
            type: "string",
            id: 15
          }
        }
      },
      ResponseCoursewareList: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          total: {
            type: "int64",
            id: 3
          },
          pages: {
            type: "int32",
            id: 4
          },
          pageNo: {
            type: "int32",
            id: 5
          },
          pageSize: {
            type: "int32",
            id: 6
          },
          datas: {
            rule: "repeated",
            type: "CoursewareItemVo",
            id: 7
          }
        }
      },
      RCEditionService: {
        methods: {
          listEditionVersion: {
            requestType: "RequestEditionVersionList",
            responseType: "ResponseEditionVersionList"
          },
          listEdition: {
            requestType: "RequestEditionList",
            responseType: "ResponseEditionList"
          },
          insertEdition: {
            requestType: "RequestInsertEdition",
            responseType: "EmptyResp"
          },
          updateEdition: {
            requestType: "RequestUpdateEdition",
            responseType: "EmptyResp"
          },
          deleteEdition: {
            requestType: "RequestDeleteEdition",
            responseType: "BaseResponse"
          },
          listChapter: {
            requestType: "RequestChapterList",
            responseType: "ResponseChapterList"
          },
          listEditionBySubject: {
            requestType: "google.protobuf.Int32Value",
            responseType: "ListResp"
          },
          listGradeByEdition: {
            requestType: "SubjectEditionReq",
            responseType: "ListResp"
          },
          listChapterByEdition: {
            requestType: "EditionGradeReq",
            responseType: "SingleResp"
          },
          listChapterNoPointByEdition: {
            requestType: "EditionGradeReq",
            responseType: "SingleResp"
          }
        }
      },
      SubjectEditionReq: {
        fields: {
          subjectId: {
            type: "int32",
            id: 1
          },
          editionVersionId: {
            type: "int32",
            id: 2
          }
        }
      },
      EditionGradeReq: {
        fields: {
          subjectId: {
            type: "int32",
            id: 1
          },
          editionVersionId: {
            type: "int32",
            id: 2
          },
          gradeId: {
            type: "int32",
            id: 3
          },
          fascicleId: {
            type: "int32",
            id: 4
          }
        }
      },
      RequestEditionVersionList: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      ResponseEditionVersionList: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          datas: {
            rule: "repeated",
            type: "EditionVersionVo",
            id: 3
          }
        }
      },
      EditionVersionVo: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      RequestEditionList: {
        fields: {
          pageNo: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          },
          gradeId: {
            type: "int32",
            id: 3
          },
          editionVersionId: {
            type: "int32",
            id: 4
          },
          subjectId: {
            type: "int32",
            id: 5
          },
          stageId: {
            type: "int32",
            id: 6
          }
        }
      },
      RequestDeleteEdition: {
        fields: {
          id: {
            type: "int32",
            id: 1
          }
        }
      },
      RequestUpdateEdition: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          stageId: {
            type: "int32",
            id: 2
          },
          gradeId: {
            type: "int32",
            id: 3
          },
          subjectId: {
            type: "int32",
            id: 4
          },
          editionVersionId: {
            type: "int32",
            id: 5
          },
          fascicleId: {
            type: "int32",
            id: 6
          },
          coverUrl: {
            type: "string",
            id: 7
          },
          gradeName: {
            type: "string",
            id: 8
          },
          editionVersionName: {
            type: "string",
            id: 9
          },
          chapterJson: {
            type: "string",
            id: 10
          }
        }
      },
      RequestInsertEdition: {
        fields: {
          stageId: {
            type: "int32",
            id: 1
          },
          gradeId: {
            type: "int32",
            id: 2
          },
          subjectId: {
            type: "int32",
            id: 3
          },
          editionVersionId: {
            type: "int32",
            id: 4
          },
          fascicleId: {
            type: "int32",
            id: 5
          },
          coverUrl: {
            type: "string",
            id: 6
          },
          gradeName: {
            type: "string",
            id: 7
          },
          editionVersionName: {
            type: "string",
            id: 8
          },
          chapterJson: {
            type: "string",
            id: 9
          }
        }
      },
      EditionVo: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          stageId: {
            type: "int32",
            id: 2
          },
          gradeId: {
            type: "int32",
            id: 3
          },
          subjectId: {
            type: "int32",
            id: 4
          },
          editionVersionId: {
            type: "int32",
            id: 5
          },
          fascicleId: {
            type: "int32",
            id: 6
          },
          coverUrl: {
            type: "string",
            id: 7
          },
          gradeName: {
            type: "string",
            id: 8
          },
          editionVersionName: {
            type: "string",
            id: 9
          }
        }
      },
      ChapterVo: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          chapterName: {
            type: "string",
            id: 2
          },
          chapterIndex: {
            type: "int32",
            id: 3
          },
          editionId: {
            type: "int32",
            id: 4
          },
          parentId: {
            type: "int32",
            id: 5
          }
        }
      },
      RequestChapterList: {
        fields: {
          editionId: {
            type: "int32",
            id: 1
          },
          parentId: {
            type: "int32",
            id: 2
          }
        }
      },
      ResponseEditionList: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          total: {
            type: "int64",
            id: 3
          },
          pages: {
            type: "int32",
            id: 4
          },
          pageNo: {
            type: "int32",
            id: 5
          },
          pageSize: {
            type: "int32",
            id: 6
          },
          datas: {
            rule: "repeated",
            type: "EditionVo",
            id: 7
          }
        }
      },
      ResponseChapterList: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          datas: {
            rule: "repeated",
            type: "ChapterVo",
            id: 3
          }
        }
      },
      BaseResponse: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          }
        }
      },
      RCGradeService: {
        methods: {
          listGrade: {
            requestType: "RequestGradeList",
            responseType: "ResponseGradeList"
          }
        }
      },
      RequestGradeList: {
        fields: {
          stageId: {
            type: "int32",
            id: 1
          }
        }
      },
      ResponseGradeList: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          datas: {
            rule: "repeated",
            type: "GradeVo",
            id: 3
          }
        }
      },
      GradeVo: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          stageId: {
            type: "int32",
            id: 2
          },
          gradeName: {
            type: "string",
            id: 3
          }
        }
      },
      RCMaterialService: {
        methods: {
          createMaterial: {
            requestType: "ModifyMaterial",
            responseType: "SingleResp"
          },
          listMaterial: {
            requestType: "ListMaterialsRequest",
            responseType: "BatchMaterialPageResp"
          },
          listMaterialByCategory: {
            requestType: "GetMaterialByCategoryRequest",
            responseType: "BatchMaterialsResp"
          },
          getMaterialById: {
            requestType: "GetMaterialByIdRequest",
            responseType: "SingleResp"
          },
          listMaterialByPackage: {
            requestType: "GetMaterialByPackageRequest",
            responseType: "BatchMaterialsResp"
          },
          updateMaterial: {
            requestType: "ModifyMaterial",
            responseType: "EmptyResp"
          },
          updateBoutiqueMaterial: {
            requestType: "UpdateMaterialBoutiqueRequest",
            responseType: "EmptyResp"
          },
          listCategory: {
            requestType: "listMaterialRequest",
            responseType: "BatchMaterialsCategoryResp"
          }
        }
      },
      MaterialView: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          teacherId: {
            type: "string",
            id: 3
          },
          teacherName: {
            type: "string",
            id: 4
          },
          createType: {
            type: "int32",
            id: 5
          },
          url: {
            type: "string",
            id: 6
          },
          size: {
            type: "int32",
            id: 7
          },
          categoryId: {
            type: "int32",
            id: 8
          },
          customerId: {
            type: "int64",
            id: 9
          },
          customerName: {
            type: "string",
            id: 10
          },
          subjectId: {
            type: "int32",
            id: 11
          },
          subjectName: {
            type: "string",
            id: 12
          },
          chapterId: {
            type: "int32",
            id: 13
          },
          chapterName: {
            type: "string",
            id: 14
          },
          pointId: {
            rule: "repeated",
            type: "int32",
            id: 15
          },
          pointName: {
            rule: "repeated",
            type: "string",
            id: 16
          },
          isBoutique: {
            type: "int32",
            id: 17
          },
          createTime: {
            type: "string",
            id: 18
          },
          editionId: {
            type: "int32",
            id: 19
          },
          editionName: {
            type: "string",
            id: 20
          },
          gradeId: {
            type: "int32",
            id: 21
          },
          gradeName: {
            type: "string",
            id: 22
          },
          fascicle: {
            type: "int32",
            id: 23
          },
          fascicleName: {
            type: "string",
            id: 24
          },
          editionVersionId: {
            type: "int32",
            id: 25
          },
          updateTime: {
            type: "string",
            id: 26
          },
          parentId: {
            type: "string",
            id: 27
          }
        }
      },
      MaterialRelaPointPo: {
        fields: {
          materialId: {
            type: "string",
            id: 1
          },
          pointId: {
            type: "int32",
            id: 2
          },
          customerId: {
            type: "int64",
            id: 3
          },
          subjectId: {
            type: "int32",
            id: 4
          },
          createTime: {
            type: "string",
            id: 5
          }
        }
      },
      MaterialCategory: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      ModifyMaterial: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          teacherId: {
            type: "string",
            id: 3
          },
          createType: {
            type: "int32",
            id: 4
          },
          url: {
            type: "string",
            id: 5
          },
          size: {
            type: "int32",
            id: 6
          },
          categoryId: {
            type: "int32",
            id: 7
          },
          customerId: {
            type: "int64",
            id: 8
          },
          subjectId: {
            type: "int32",
            id: 9
          },
          chapterId: {
            type: "int32",
            id: 10
          },
          pointId: {
            rule: "repeated",
            type: "int32",
            id: 11
          },
          fascicle: {
            type: "int32",
            id: 12
          },
          editionId: {
            type: "int32",
            id: 13
          }
        }
      },
      UpdateMaterialBoutiqueRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          isBoutique: {
            type: "int32",
            id: 2
          },
          subjectId: {
            type: "int32",
            id: 3
          },
          customerId: {
            type: "int64",
            id: 4
          }
        }
      },
      GetMaterialByIdRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          subjectId: {
            type: "int32",
            id: 2
          },
          customerId: {
            type: "int64",
            id: 3
          }
        }
      },
      GetMaterialByCategoryRequest: {
        fields: {
          categoryIds: {
            rule: "repeated",
            type: "int32",
            id: 1
          },
          subjectId: {
            type: "int32",
            id: 2
          },
          customerId: {
            type: "int64",
            id: 3
          },
          searchContent: {
            type: "string",
            id: 4
          },
          isBoutique: {
            type: "int32",
            id: 5
          }
        }
      },
      GetMaterialByPackageRequest: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          subjectId: {
            type: "int32",
            id: 2
          },
          customerId: {
            type: "int64",
            id: 3
          }
        }
      },
      ListMaterialsRequest: {
        fields: {
          name: {
            type: "string",
            id: 1
          },
          teacherId: {
            type: "string",
            id: 2
          },
          createType: {
            type: "int32",
            id: 3
          },
          url: {
            type: "string",
            id: 4
          },
          size: {
            type: "int32",
            id: 5
          },
          categoryId: {
            rule: "repeated",
            type: "int32",
            id: 6
          },
          customerId: {
            type: "int64",
            id: 7
          },
          subjectId: {
            type: "int32",
            id: 8
          },
          editionId: {
            type: "int32",
            id: 9
          },
          chapterId: {
            type: "string",
            id: 10
          },
          pointId: {
            type: "int32",
            id: 11
          },
          gradeId: {
            type: "int32",
            id: 12
          },
          fascicle: {
            type: "int32",
            id: 13
          },
          materialUsageStatistic: {
            type: "int32",
            id: 14
          },
          updateTimeStatistic: {
            type: "int32",
            id: 15
          },
          searchContent: {
            type: "string",
            id: 16
          },
          isBoutique: {
            type: "int32",
            id: 17
          },
          pageNo: {
            type: "int32",
            id: 18
          },
          pageSize: {
            type: "int32",
            id: 19
          }
        }
      },
      listMaterialRequest: {
        fields: {}
      },
      MaterialPageResp: {
        fields: {
          pageNo: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          },
          pages: {
            type: "int32",
            id: 3
          },
          total: {
            type: "int64",
            id: 4
          },
          materialViews: {
            rule: "repeated",
            type: "MaterialView",
            id: 5
          }
        }
      },
      BatchMaterialPageResp: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          datas: {
            type: "MaterialPageResp",
            id: 3
          }
        }
      },
      BatchMaterialsResp: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          datas: {
            rule: "repeated",
            type: "MaterialView",
            id: 3
          }
        }
      },
      BatchMaterialsCategoryResp: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          datas: {
            rule: "repeated",
            type: "MaterialCategory",
            id: 3
          }
        }
      },
      RCPointService: {
        methods: {
          listPointsBySubjectId: {
            requestType: "google.protobuf.Int32Value",
            responseType: "ListResp"
          },
          listPointsJsonBySubjectId: {
            requestType: "google.protobuf.Int32Value",
            responseType: "SingleResp"
          },
          createPoint: {
            requestType: "Point",
            responseType: "SingleResp"
          },
          updatePoint: {
            requestType: "Point",
            responseType: "EmptyResp"
          },
          deletePoint: {
            requestType: "google.protobuf.Int32Value",
            responseType: "EmptyResp"
          },
          upGradePoint: {
            requestType: "google.protobuf.Int32Value",
            responseType: "EmptyResp"
          },
          downGradePoint: {
            requestType: "google.protobuf.Int32Value",
            responseType: "EmptyResp"
          },
          upOrderPoint: {
            requestType: "google.protobuf.Int32Value",
            responseType: "EmptyResp"
          },
          downOrderPoint: {
            requestType: "google.protobuf.Int32Value",
            responseType: "EmptyResp"
          },
          listPointByChapterIds: {
            requestType: "ReqPointListByChapterIds",
            responseType: "RespPointList"
          },
          getPointById: {
            requestType: "google.protobuf.Int32Value",
            responseType: "SingleResp"
          }
        }
      },
      Point: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          parentId: {
            type: "int32",
            id: 2
          },
          pointIndex: {
            type: "int32",
            id: 3
          },
          subjectId: {
            type: "int32",
            id: 4
          },
          pointName: {
            type: "string",
            id: 5
          }
        }
      },
      ReqPointListByChapterIds: {
        fields: {
          chapterIds: {
            rule: "repeated",
            type: "int32",
            id: 1
          }
        }
      },
      RespPointList: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          datas: {
            rule: "repeated",
            type: "Point",
            id: 3
          }
        }
      },
      RCQuestionPropService: {
        methods: {
          listStylesBySubjectId: {
            requestType: "google.protobuf.Int32Value",
            responseType: "ListResp"
          },
          listAbility: {
            requestType: "google.protobuf.Empty",
            responseType: "ListResp"
          },
          listHardDegree: {
            requestType: "google.protobuf.Empty",
            responseType: "ListResp"
          },
          listConceptType: {
            requestType: "google.protobuf.Empty",
            responseType: "ListResp"
          },
          listSource: {
            requestType: "google.protobuf.Empty",
            responseType: "ListResp"
          },
          listExerciseType: {
            requestType: "google.protobuf.Empty",
            responseType: "ListResp"
          },
          getAbilityById: {
            requestType: "google.protobuf.Int32Value",
            responseType: "SingleResp"
          }
        }
      },
      QuestionProp: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          }
        }
      },
      RCQuestionService: {
        methods: {
          createQuestion: {
            requestType: "QuestionReq",
            responseType: "SingleResp"
          },
          updateQuestion: {
            requestType: "QuestionReq",
            responseType: "EmptyResp"
          },
          deleteQuestion: {
            requestType: "SingleQuestionReq",
            responseType: "EmptyResp"
          },
          querySingleQuestion: {
            requestType: "SingleQuestionReq",
            responseType: "SingleResp"
          },
          queryPageQuestion: {
            requestType: "PageQuestionReq",
            responseType: "PageResp"
          },
          queryReviewQuestion: {
            requestType: "ReviewQuestionPageReq",
            responseType: "PageResp"
          },
          queryMyQuestion: {
            requestType: "MyQuestionReq",
            responseType: "PageResp"
          }
        }
      },
      SingleQuestionReq: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          subjectId: {
            type: "int32",
            id: 2
          }
        }
      },
      QuestionReq: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          subjectId: {
            type: "int32",
            id: 2
          },
          style: {
            type: "int32",
            id: 3
          },
          difficulty: {
            type: "int32",
            id: 4
          },
          parentId: {
            type: "string",
            id: 5
          },
          seq: {
            type: "int32",
            id: 6
          },
          labelType: {
            type: "int32",
            id: 7
          },
          pointId: {
            rule: "repeated",
            type: "int32",
            id: 8
          },
          abilityId: {
            rule: "repeated",
            type: "int32",
            id: 9
          },
          conceptTypeId: {
            type: "int32",
            id: 10
          },
          conceptTarget: {
            type: "string",
            id: 11
          },
          creatorId: {
            type: "string",
            id: 12
          },
          customerId: {
            type: "int64",
            id: 13
          },
          originalCustomerId: {
            type: "int64",
            id: 14
          },
          gradeId: {
            type: "int32",
            id: 15
          },
          chapterId: {
            rule: "repeated",
            type: "int32",
            id: 16
          },
          createType: {
            type: "int32",
            id: 17
          },
          refQuestionId: {
            type: "string",
            id: 18
          },
          body: {
            type: "string",
            id: 19
          },
          answer: {
            type: "string",
            id: 20
          },
          selection: {
            type: "string",
            id: 21
          },
          errorType: {
            type: "string",
            id: 22
          },
          errorAnalysis: {
            type: "string",
            id: 23
          },
          label: {
            type: "string",
            id: 24
          },
          analyse: {
            type: "string",
            id: 25
          },
          realCount: {
            type: "int32",
            id: 26
          },
          sourceId: {
            type: "int32",
            id: 27
          },
          questionCategory: {
            type: "int32",
            id: 28
          },
          method: {
            type: "string",
            id: 29
          },
          discuss: {
            type: "string",
            id: 30
          }
        }
      },
      PageQuestionReq: {
        fields: {
          pageNo: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          },
          subjectId: {
            type: "int32",
            id: 3
          },
          customerId: {
            type: "int64",
            id: 4
          },
          labelType: {
            type: "int32",
            id: 5
          },
          gradeId: {
            type: "int32",
            id: 6
          },
          chapterSet: {
            rule: "repeated",
            type: "int32",
            id: 7
          },
          pointSet: {
            rule: "repeated",
            type: "int32",
            id: 8
          },
          style: {
            type: "int32",
            id: 9
          },
          abilityId: {
            type: "int32",
            id: 10
          },
          conceptTypeId: {
            type: "int32",
            id: 11
          },
          questionCategory: {
            type: "int32",
            id: 12
          },
          hardDegreeId: {
            type: "int32",
            id: 13
          },
          sourceId: {
            type: "int32",
            id: 14
          },
          timeOrder: {
            type: "int32",
            id: 15
          }
        }
      },
      ReviewQuestionPageReq: {
        fields: {
          pageNo: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          },
          reviewStatus: {
            type: "int32",
            id: 3
          },
          userId: {
            type: "string",
            id: 4
          },
          editionVersionId: {
            type: "int32",
            id: 5
          },
          gradeId: {
            type: "int32",
            id: 6
          },
          fascicleId: {
            type: "int32",
            id: 7
          },
          subjectId: {
            type: "int32",
            id: 8
          }
        }
      },
      MyQuestionReq: {
        fields: {
          pageNo: {
            type: "int32",
            id: 1
          },
          pageSize: {
            type: "int32",
            id: 2
          },
          customerId: {
            type: "int64",
            id: 3
          },
          subjectId: {
            type: "int32",
            id: 4
          },
          reviewStatus: {
            type: "int32",
            id: 5
          },
          labelType: {
            type: "int32",
            id: 6
          },
          creatorId: {
            type: "string",
            id: 7
          },
          startDate: {
            type: "string",
            id: 8
          },
          endDate: {
            type: "string",
            id: 9
          },
          timeOrder: {
            type: "int32",
            id: 10
          }
        }
      },
      Question4List: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          subjectId: {
            type: "int32",
            id: 2
          },
          style: {
            type: "int32",
            id: 3
          },
          styleName: {
            type: "string",
            id: 4
          },
          body: {
            type: "string",
            id: 5
          },
          selection: {
            type: "string",
            id: 6
          },
          answer: {
            type: "string",
            id: 7
          },
          customerId: {
            type: "int64",
            id: 8
          },
          customerName: {
            type: "string",
            id: 9
          },
          creatorId: {
            type: "string",
            id: 10
          },
          creatorName: {
            type: "string",
            id: 11
          },
          createTime: {
            type: "string",
            id: 12
          },
          updateTime: {
            type: "string",
            id: 13
          },
          difficultyName: {
            type: "string",
            id: 14
          },
          realCount: {
            type: "int32",
            id: 15
          },
          totalUseCount: {
            type: "int32",
            id: 16
          },
          todayUseCount: {
            type: "int32",
            id: 17
          },
          totalClassCount: {
            type: "int32",
            id: 18
          },
          todayClassCount: {
            type: "int32",
            id: 19
          }
        }
      },
      QuestionDetail: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          subjectId: {
            type: "int32",
            id: 2
          },
          subjectName: {
            type: "string",
            id: 3
          },
          style: {
            type: "int32",
            id: 4
          },
          styleName: {
            type: "string",
            id: 5
          },
          difficulty: {
            type: "int32",
            id: 6
          },
          difficultyName: {
            type: "string",
            id: 7
          },
          parentId: {
            type: "string",
            id: 8
          },
          seq: {
            type: "int32",
            id: 9
          },
          labelType: {
            type: "int32",
            id: 10
          },
          pointId: {
            rule: "repeated",
            type: "int32",
            id: 11
          },
          pointName: {
            rule: "repeated",
            type: "string",
            id: 12
          },
          abilityId: {
            rule: "repeated",
            type: "int32",
            id: 13
          },
          abilityName: {
            rule: "repeated",
            type: "string",
            id: 14
          },
          conceptTypeId: {
            type: "int32",
            id: 15
          },
          conceptTypeName: {
            type: "string",
            id: 16
          },
          conceptTarget: {
            type: "string",
            id: 17
          },
          creatorId: {
            type: "string",
            id: 18
          },
          customerId: {
            type: "int64",
            id: 19
          },
          originalCustomerId: {
            type: "int64",
            id: 20
          },
          gradeId: {
            type: "int32",
            id: 21
          },
          editionVersionId: {
            type: "int32",
            id: 22
          },
          fascicleId: {
            type: "int32",
            id: 23
          },
          chapterId: {
            rule: "repeated",
            type: "int32",
            id: 24
          },
          chapterName: {
            rule: "repeated",
            type: "string",
            id: 25
          },
          createType: {
            type: "int32",
            id: 26
          },
          refQuestionId: {
            type: "string",
            id: 27
          },
          body: {
            type: "string",
            id: 28
          },
          selection: {
            type: "string",
            id: 29
          },
          answer: {
            type: "string",
            id: 30
          },
          errorType: {
            type: "string",
            id: 31
          },
          errorAnalysis: {
            type: "string",
            id: 32
          },
          analyse: {
            type: "string",
            id: 33
          },
          method: {
            type: "string",
            id: 34
          },
          discuss: {
            type: "string",
            id: 35
          },
          sourceId: {
            type: "int32",
            id: 36
          },
          sourceName: {
            type: "string",
            id: 37
          }
        }
      },
      RCReviewService: {
        methods: {
          submitResource: {
            requestType: "Resource2ReviewReq",
            responseType: "EmptyResp"
          },
          reviewResource: {
            requestType: "ReviewResourceReq",
            responseType: "EmptyResp"
          }
        }
      },
      Resource2ReviewReq: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          resourceType: {
            type: "int32",
            id: 2
          },
          subjectId: {
            type: "int32",
            id: 3
          },
          customerId: {
            type: "int64",
            id: 4
          }
        }
      },
      ReviewResourceReq: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          resourceType: {
            type: "int32",
            id: 2
          },
          subjectId: {
            type: "int32",
            id: 3
          },
          customerId: {
            type: "int64",
            id: 4
          },
          userId: {
            type: "string",
            id: 5
          },
          remark: {
            type: "string",
            id: 6
          },
          reviewStatus: {
            type: "int32",
            id: 7
          }
        }
      },
      RCSchoolinglengthService: {
        methods: {
          listSchoolingLength: {
            requestType: "RequestSchoolingLength",
            responseType: "ResponseSchoolingLengthList"
          }
        }
      },
      RequestSchoolingLength: {
        fields: {
          id: {
            type: "int32",
            id: 1
          }
        }
      },
      SchoolingLength: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          code: {
            type: "string",
            id: 2
          },
          schoolingLengthName: {
            type: "string",
            id: 3
          },
          gradeId: {
            type: "string",
            id: 4
          }
        }
      },
      ResponseSchoolingLengthList: {
        fields: {
          code: {
            type: "string",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          datas: {
            rule: "repeated",
            type: "SchoolingLength",
            id: 3
          }
        }
      },
      RCSubjectService: {
        methods: {
          listSubject: {
            requestType: "google.protobuf.Empty",
            responseType: "ListResp"
          },
          listSubjectByStage: {
            requestType: "google.protobuf.Int32Value",
            responseType: "ListResp"
          }
        }
      },
      Subject: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          subjectName: {
            type: "string",
            id: 2
          }
        }
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        nested: {
          Any: {
            fields: {
              type_url: {
                type: "string",
                id: 1
              },
              value: {
                type: "bytes",
                id: 2
              }
            }
          },
          Timestamp: {
            fields: {
              seconds: {
                type: "int64",
                id: 1
              },
              nanos: {
                type: "int32",
                id: 2
              }
            }
          },
          DoubleValue: {
            fields: {
              value: {
                type: "double",
                id: 1
              }
            }
          },
          FloatValue: {
            fields: {
              value: {
                type: "float",
                id: 1
              }
            }
          },
          Int64Value: {
            fields: {
              value: {
                type: "int64",
                id: 1
              }
            }
          },
          UInt64Value: {
            fields: {
              value: {
                type: "uint64",
                id: 1
              }
            }
          },
          Int32Value: {
            fields: {
              value: {
                type: "int32",
                id: 1
              }
            }
          },
          UInt32Value: {
            fields: {
              value: {
                type: "uint32",
                id: 1
              }
            }
          },
          BoolValue: {
            fields: {
              value: {
                type: "bool",
                id: 1
              }
            }
          },
          StringValue: {
            fields: {
              value: {
                type: "string",
                id: 1
              }
            }
          },
          BytesValue: {
            fields: {
              value: {
                type: "bytes",
                id: 1
              }
            }
          },
          Empty: {
            fields: {}
          }
        }
      }
    }
  }
});

module.exports = $root;
