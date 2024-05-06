import React, { useState } from "react";
import styles from "./index.module.scss";
import { ICase } from "../../types/case";
import path from "../../routes/path";
import { useNavigate } from "react-router-dom";

interface CaseCardProps {
  className?: string;
  patientCase: ICase;
  onClick?: () => void;
}

const CaseCard = ({ className, patientCase, onClick }: CaseCardProps) => {
  const nav = useNavigate();
  const [, setSlot] = useState<React.ReactNode>(null);

  const handleOnClick = () => nav(path.case);
  return (
    <div className={`${styles.caseCardContainer} ${className} `} onClick={handleOnClick}>
      <div className={styles.caseIdContainer}>
        <span>Case: {patientCase.case_id}</span>
      </div>
      <div className={styles.chiefComplaintContainer}>
        <span>{patientCase.patient_chief_complaint}</span>
      </div>
      <div className={styles.patientInfoContainer}>
        <span>{patientCase.age + ", " + patientCase.gender}</span>
      </div>
    </div>
  );
};

export default CaseCard;
