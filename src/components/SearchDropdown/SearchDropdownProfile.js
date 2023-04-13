import React, { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Menu, Checkbox, Collapse} from "antd";
import { useState } from "react";
import "./SearchDropdown.scss";
import Input from "../common/Input";
import search_icon from "../../svg/search_icon.svg";
import { createOtherSpecialization } from "../../store/apiCalls/profileDetails";
import { useDispatch } from "react-redux";
import { specialization } from "../../constants";

const SearchDropdownProfile = (props) => {
  const {
    options,
    index,
    onChange,
    name,
    selectedValue,
    placeholder,
    label,
    labelClass,
    disabled,
  } = props;
  const dispatch = useDispatch();
  const [other, setOther] = useState({show: false, specialization: '', disabled: true});
  const [dropOptions, setDropOptions] = useState(options);
  const [search, setSearch] = useState("");
  const [activeKey,setActiveKey] = useState('0');
  useEffect(() => {
    setDropOptions(options);
    // eslint-disable-next-line
  }, [options]);
  const headers = { Authorization: `Bearer ${localStorage.usertoken || ""}` };

  const handleAddOthers = async () => {
    if(other.specialization && !other.disabled) {
      const queryParams = {
        data: {
          specialization: other.specialization,
          specializationId: other._id ? other._id : ""
        },
        headers
      };
      dispatch({ type: 'SET_LOADER', payload: true});
      const addResp = await createOtherSpecialization(queryParams);
      dispatch({ type: 'SET_LOADER', payload: false});
      if(addResp.data?.success) {
        setOther({show: false, specialization: '', disabled: true})
        props.handleOtherOption(addResp.data?.data)
      }
    } else if(other.disabled) {
      setOther({...other, disabled: false})
    }
  }

  const handleOptionSelect = (value, index) => {
    if(value.label === "Others" && selectedValue.length < 3) {
      setOther({...other, show: true, disabled: false})
    } else {
      onChange({target: {value, name, checked: selectedValue?.includes(value?.value)}},index)
    }
    setActiveKey(null)
  }
  const onSearchChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value !== "") {
      let filterActivity = dropOptions.filter((ac) => {
        return ac?.label.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setDropOptions(filterActivity);
    } else {
      setDropOptions(options);
    }
  };
  const HandleBlur = (e) => {
    setActiveKey('0')
    // ant-collapse-content ant-collapse-content-active
    // // e.target.close()
    // const node= e.target.parentElement
    // // node.children='ant-collapse-content'
    // node.children[1].className='ant-collapse-content'
    // console.log(collapseRef,"IN HANDLE BLUR ",node.children[1])
  }
  const optionMenu = (
    <>
      <div>
        <div className="search-dropdown">
          <Input
            // type="Search"
            placeholder="Search for Specialization"
            // allowClear
            preIconClass={!search && search_icon}
            value={search}
            className={
              search
                ? "form-control active-input search-result"
                : "form-control grey-input with_icon"
            }
            handleChange={(e) => onSearchChange(e)}
          />
        </div>
        {selectedValue?.length > 0 && (
          <>
            Selected {name}s
            <Checkbox.Group>
              {options?.filter(opt => selectedValue.includes(opt?.value)).map((exp, i) => (
                <Menu key={i}>
                  <Menu.Item onClick={(e) => handleOptionSelect(exp, index)}>
                    <input
                      type="checkbox"
                      key={i}
                      name={name}
                      id={name}
                      checked={selectedValue?.includes(exp?.value)}
                      // onChange={(e) => handleOptionSelect(e.target.value, index)}
                    />
                    {exp?.label}
                  </Menu.Item>
                </Menu>
              ))}
            </Checkbox.Group>
            <br />
          </>
        )}
        {dropOptions === options ? `Polular ${name}s` : `Searched ${name}s`}
        <Checkbox.Group>
          {dropOptions?.map((exp, i) => {
            if (!selectedValue?.includes(exp?.value))
              return (
                <Menu key={i}>
                  <Menu.Item style={{ width: "100%" }} onClick={() => handleOptionSelect(exp, index)}>
                    <input
                      type="checkbox"
                      key={i}
                      name={name}
                      id={name}
                      checked={selectedValue?.includes(exp?.value)}
                      // onChange={(e) => handleOptionSelect(e.target.value, index)}
                    // required={required}
                    />
                    {exp?.label}
                  </Menu.Item>
                </Menu>
              );
            else {
              return null;
            }
          })}
        </Checkbox.Group>
      </div>
    </>
  );
  return (
    <>
      <div className=""
        style={disabled ? { pointerEvents: "none", cursor: "pointer", opacity: "0.4" } : {}}
      >
        <label className={labelClass}>{label} <small className="input-required">*</small></label>
        <div
          className="filter-heading activity-filter-txt"
        >
          <Collapse onChange={(e) => setActiveKey(activeKey === "1" ? null : "1")} activeKey={activeKey} expandIconPosition="right" className={selectedValue?.length !== 0 ? "value-fill" : "value"}>
            <Collapse.Panel  header={`${selectedValue?.length === 0 ? placeholder: `${dropOptions.filter(opt => selectedValue?.includes(opt?.value))[0]?.label} ${dropOptions.filter(opt => selectedValue?.includes(opt?.value)).length > 1 ? `+ ${dropOptions.filter(opt => selectedValue?.includes(opt?.value)).length - 1}`: ''}`}`} key={"1"} >
              <p>{optionMenu}</p>
            </Collapse.Panel>
          </Collapse>
        </div>
      </div>
      {other.show && <Input readOnly={other.disabled} className={"form-control active-input specialization-input"} value={other.specialization} postTextClass={other.disabled ? 'EDIT' : 'ADD'} onIconClick={handleAddOthers} handleChange={(e) => setOther({...other, specialization: e.target.value})} type="text" disabled={other.disabled} />}
    </>
  );
};
export default SearchDropdownProfile;
