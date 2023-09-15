import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0vGkwlr08TKQLTyV8OTva1oKeRTLzmGDHtA&usqp=CAU"
                alt="Khanhne"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Khanh Nguyen</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>khanhneeee</span>
            </div>
        </div>
    );
}

export default AccountItem;
