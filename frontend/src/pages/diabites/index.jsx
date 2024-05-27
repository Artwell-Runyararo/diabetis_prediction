import React, { useState } from 'react';
import { EditFilled, DeleteFilled, EyeFilled, PlusCircleFilled, SaveFilled, EllipsisOutlined, CloudDownloadOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Col, Row, Button, Modal, Form, Input, Badge, Table, message, Popconfirm, Space, Alert, Card, Skeleton, Dropdown, Select, InputNumber, Tag } from 'antd';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import { predictDiabeties, getErrorMessage } from '../../api/tanStackService';

const Diabeties = () => {
    const [form] = Form.useForm();
    const queryClient = useQueryClient();
    const [messageApi, contextHolder] = message.useMessage();


    const [getData, setData] = useState([]);
    const predictDiabetiesMutation = useMutation({
        mutationFn: predictDiabeties,
        onSuccess: (data) => {
            // Invalidates cache and refetch 
            queryClient.invalidateQueries();
            setData(data);
            messageApi.open({
                type: 'success',
                content: 'Successfully!.',
                duration: 6,
            });
            setIsModalOpen(true);
        },
        onError: (error) => {
            messageApi.open({
                type: 'error',
                content: getErrorMessage(error),
                duration: 6,
            });
        }
    });
    const onFinish = (values) => {

        const createRequest_Data = {
            pregnancies: +values?.pregnancies,
            glucose: +values?.glucose,
            diastolic: +values?.diastolic,
            trieps: +values?.trieps,
            insulin: +values?.insulin,
            bmi: +values?.bmi,
            dpf: +values?.dpf,
            age: +values?.age,
        }
        console.log(createRequest_Data)
        try {
            predictDiabetiesMutation.mutate(createRequest_Data);
            form.resetFields();
        } catch (error) {
            console.log("Error");
        }
    }
    // console.log("Received Result:", getData?.data?.estimated_value)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-sm col-md col-lg py-5">
                    <Card title='Diabeties Prediction'>

                        <Form className='p-5' layout='vertical' form={form} onFinish={onFinish} hideRequiredMark>
                            <div className='row'>
                                {predictDiabetiesMutation.isError ? (
                                    <div className='py-2'><Alert onClose={() => predictDiabetiesMutation.reset()} message={`An error occured: ` + getErrorMessage(predictDiabetiesMutation.error)} type="error" showIcon closable /></div>
                                ) : null}
                                <div className='col-sm col-md col-lg'>
                                    <Form.Item label='Pregnancies' name={'pregnancies'} rules={[{ required: true },]}>
                                        <Input placeholder='Enter number of pregnancies' />
                                    </Form.Item>
                                    <Form.Item label='Glucose' name={'glucose'} rules={[{ required: true },]}>
                                        <Input placeholder='Enter number of glucose' />
                                    </Form.Item>
                                    <Form.Item label='Diastolic' name={'diastolic'} rules={[{ required: true },]}>
                                        <Input placeholder='Enter number of diastolic' />
                                    </Form.Item>
                                </div>
                                <div className='col-sm col-md col-lg'>
                                    <Form.Item label='Trieps' name={'trieps'} rules={[{ required: true },]}>
                                        <Input placeholder='Enter number of trieps' />
                                    </Form.Item>
                                    <Form.Item label='Insulin' name={'insulin'} rules={[{ required: true },]}>
                                        <Input placeholder='Enter number of insulin' />
                                    </Form.Item>
                                    <Form.Item label='(Bmi) Body Mass Index' name={'bmi'} rules={[{ required: true },]}>
                                        <Input placeholder='Enter number of bmi' />
                                    </Form.Item>
                                </div>
                                <div className='col-sm col-md col-lg'>
                                    <Form.Item label='(dpf) Days Postfertilization' name={'dpf'} rules={[{ required: true },]}>
                                        <Input placeholder='Enter number of dpf' />
                                    </Form.Item>
                                    <Form.Item label='Age' name={'age'} rules={[{ required: true },]}>
                                        <Input placeholder='Enter number of age' />
                                    </Form.Item>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-sm col-md col-lg'>
                                    <Form.Item>
                                        <Button type='primary' icon={<SaveFilled />} className='w-full block' htmlType='submit'>Lets Predict</Button>
                                    </Form.Item>
                                </div>
                                <div className="col-sm col-md col-lg d-flex justify-end">
                                    {predictDiabetiesMutation.isPending ? (<span style={{ color: '#6b21a8' }} className="flex items-center rounded-lg px-4 py-2">
                                        <svg style={{ color: '#6b21a8' }} className="mr-3 h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span className="font-medium"> loading ... </span>
                                    </span>) : <span></span>}
                                </div>
                            </div>
                        </Form>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-sm col-md col-lg">
                    <Modal title="Artificial intelligence" width={800} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                        {/* Conditions Results */}
                        <p className='text-5xl text-black font-black'>The A.I predicted result: {getData?.data?.estimated_value === 1 ? (<span>True</span>) : (<span>False</span>)}</p>
                        {getData?.data?.estimated_value === 1 ? (<p>Yes yes</p>) : (<p>No no</p>)}
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Diabeties