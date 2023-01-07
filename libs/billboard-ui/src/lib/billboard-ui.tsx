import styles from './billboard-ui.module.scss';

/* eslint-disable-next-line */
export interface BillboardUiProps {}

export function BillboardUi(props: BillboardUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to BillboardUi!</h1>
    </div>
  );
}

export default BillboardUi;
