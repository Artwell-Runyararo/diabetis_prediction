import React from 'react';
import { Descriptions, Divider, Statistic, ConfigProvider, Flex, Card } from 'antd';
import { Segmented, Image } from 'antd';

const UserProfile = () => {

    const address = localStorage.getItem('address');
    const phone = localStorage.getItem('phone');
    const age = localStorage.getItem('age');
    const gender = localStorage.getItem('gender');
    const job = localStorage.getItem('job');
    const social = localStorage.getItem('social');
    const name = localStorage.getItem('account');

    const items = [
        {
            key: '1',
            label: 'Age',
            children: (<span className='text-black font-semibold'>{age}</span>),
            span: 3,
        },
        {
            key: '2',
            label: 'Address',
            children: (<span className='text-black font-semibold'>{address}</span>),
            span: 3,
        },
        {
            key: '3',
            label: 'Phone Number',
            children: (<span className='text-black font-semibold'>{phone}</span>),
            span: 3,
        },
        {
            key: '4',
            label: 'Gender',
            children: (<span className='text-black font-semibold'>{gender}</span>),
            span: 3,
        },
        {
            key: '5',
            label: 'Job Title',
            children: (<span className='text-black font-semibold'>{job}</span>),
            span: 3,
        },
        {
            key: '6',
            label: 'Social Media',
            children: (<span className='text-black font-semibold'>{social}</span>),
            span: 3,
        },
    ];


    return (
        <div className='container-fluid'>
            <div className="row px-24 py-3">
                <div className="col-sm col-md col-lg">
                    <h6>User Profile</h6>
                    <Card bordered={false} >
                        <div className="row">
                            <div className="col flex justify-center">
                                <Image className='rounded-full'
                                    width={100}
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm col-md col-lg py-3">
                                <Flex justify='center' align="center" vertical='vertical'>
                                    <p className='m-0 text-black font-semibold'>{name}</p>
                                    <p className='m-0'>1996-06-12</p>
                                </Flex>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm col-md col-lg py-3">
                                <Descriptions title={(<>
                                    <p className=''>Details</p>
                                    <Divider className='m-0' />
                                </>)} size='small' items={items} />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default UserProfile